import { db } from "@/lib/db";
import { SITE } from "@/lib/site-data";

const STAFF_EMAIL = process.env.STAFF_EMAIL || SITE.email;

type NotifType = "contact" | "pickup" | "volunteer" | "newsletter";

/**
 * Sends the notification email via Resend when RESEND_API_KEY is configured.
 * Silently no-ops otherwise, so local/dev environments keep working with
 * just the DB-backed admin dashboard notifications.
 */
async function sendEmail(subject: string, body: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    // The Resend SDK does NOT throw on API errors - it resolves with
    // { data: null, error }. Must check `error` explicitly or failures
    // (e.g. sending to an unverified recipient in sandbox mode) look
    // like a successful send.
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "WasteCure Website <onboarding@resend.dev>",
      to: process.env.EMAIL_TO || STAFF_EMAIL,
      subject,
      text: body,
    });
    if (error) {
      console.error("[notify] email send failed:", error.message || error);
      return false;
    }
    console.log("[notify] email sent:", data?.id);
    return true;
  } catch (e) {
    console.error("[notify] email send threw:", (e as Error).message);
    return false;
  }
}

/**
 * Records a notification (best-effort DB insert for the admin dashboard)
 * and emails staff via Resend when RESEND_API_KEY is configured. Returns
 * true if the email was actually sent, so callers can treat "email sent"
 * as a success path even when the database is unavailable.
 */
export async function notifyStaff(
  type: NotifType,
  record: Record<string, unknown>
): Promise<boolean> {
  const id = (record.id as string) || `unknown-${Date.now()}`;
  const name = (record.name as string) || "a visitor";
  const phone = (record.phone as string) || "-";
  const email = (record.email as string) || "-";

  let subject = "";
  let body = "";

  if (type === "contact") {
    subject = `New enquiry from ${name}`;
    body = [
      `You have received a new enquiry via the WasteCure website.`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Organisation: ${record.organisation || "-"}`,
      `Service: ${record.service || "-"}`,
      `Location: ${record.location || "-"}`,
      ``,
      `Message:`,
      (record.message as string) || "-",
    ].join("\n");
  } else if (type === "pickup") {
    subject = `New pickup request from ${name}`;
    body = [
      `You have received a new pickup request.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Address: ${record.address || "-"}`,
      `Location: ${record.location || "-"}`,
      `Waste type: ${record.wasteType || "-"}`,
      `Volume: ${record.volume || "-"}`,
      `Preferred date: ${record.preferredDate || "-"}`,
      `Notes: ${record.notes || "-"}`,
    ].join("\n");
  } else if (type === "volunteer") {
    subject = `New volunteer signup: ${name}`;
    body = [
      `A new volunteer has signed up!`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Location: ${record.location || "-"}`,
      `Role: ${record.role || "-"}`,
      `Message: ${record.message || "-"}`,
    ].join("\n");
  } else {
    subject = `New newsletter subscriber`;
    body = [
      `A new subscriber joined the WasteCure newsletter.`,
      ``,
      `Email: ${email}`,
      `Name: ${name === "a visitor" ? "-" : name}`,
    ].join("\n");
  }

  // Persist to DB using raw SQL (fire-and-forget, never blocks the main
  // request). Raw SQL is used for reliability because the dev server may
  // cache an old Prisma client that doesn't know the Notification model.
  // Note: "to" and "read" are quoted because they are reserved in SQLite.
  try {
    const notifId = `n-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const now = new Date().toISOString();
    db.$executeRaw`INSERT INTO Notification (id, type, refId, "to", subject, body, status, "read", createdAt) VALUES (${notifId}, ${type}, ${id}, ${STAFF_EMAIL}, ${subject}, ${body}, 'pending', 0, ${now})`.catch(
      (e: unknown) =>
        console.error("[notify] insert failed:", (e as Error).message)
    );
  } catch {
    // Silent
  }

  // Real email delivery (no-op, returns false, if RESEND_API_KEY is unset)
  return sendEmail(subject, body);
}
