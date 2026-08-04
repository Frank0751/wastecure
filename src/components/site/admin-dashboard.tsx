"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  X,
  RefreshCw,
  Mail,
  Truck,
  Users,
  Newspaper,
  MessageSquare,
  Loader2,
  Phone,
  MapPin,
  Clock,
  Lock,
  LogOut,
  TrendingUp,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Tab = "overview" | "contacts" | "pickups" | "volunteers" | "newsletter" | "chat" | "notifications";

type AnyRow = Record<string, unknown>;

const TABS: { id: Tab; label: string; icon: typeof Mail; endpoint: string | null }[] = [
  { id: "overview", label: "Overview", icon: TrendingUp, endpoint: null },
  { id: "contacts", label: "Enquiries", icon: Mail, endpoint: "/api/contact" },
  { id: "pickups", label: "Pickups", icon: Truck, endpoint: "/api/pickup" },
  { id: "volunteers", label: "Volunteers", icon: Users, endpoint: "/api/volunteer" },
  { id: "newsletter", label: "Newsletter", icon: Newspaper, endpoint: "/api/newsletter" },
  { id: "notifications", label: "Notifications", icon: Bell, endpoint: "/api/notifications" },
  { id: "chat", label: "Chat", icon: MessageSquare, endpoint: "/api/chat" },
];

const AUTH_KEY = "wastecure-admin-auth";
// Demo password - in production this would be validated server-side.
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "wastecure2024";

function fmtDate(v: unknown): string {
  if (!v) return "-";
  try {
    const d = new Date(v as string);
    return d.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return String(v);
  }
}

function Cell({ label, value }: { label: string; value: unknown }) {
  if (value === null || value === undefined || value === "") return null;
  return (
    <div className="min-w-0">
      <dt className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="truncate text-sm text-foreground">{String(value)}</dd>
    </div>
  );
}

export function AdminDashboard({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);
  const [tab, setTab] = useState<Tab>("overview");
  const [items, setItems] = useState<AnyRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Stats for overview
  const [stats, setStats] = useState<Record<string, number>>({});

  // Check sessionStorage for existing auth on open
  useEffect(() => {
    if (open) {
      try {
        if (sessionStorage.getItem(AUTH_KEY) === "1") setAuthed(true);
      } catch {
        /* ignore */
      }
    }
  }, [open]);

  const submitAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setAuthError(false);
      try {
        sessionStorage.setItem(AUTH_KEY, "1");
      } catch {
        /* ignore */
      }
    } else {
      setAuthError(true);
    }
  };

  const logout = () => {
    setAuthed(false);
    setPassword("");
    try {
      sessionStorage.removeItem(AUTH_KEY);
    } catch {
      /* ignore */
    }
    onOpenChange(false);
  };

  const load = async (t: Tab) => {
    if (t === "overview") {
      // Fetch counts from all endpoints in parallel
      setLoading(true);
      setError(null);
      try {
        const endpoints = TABS.filter((x) => x.endpoint).map((x) => x.endpoint!);
        const results = await Promise.all(
          endpoints.map(async (ep) => {
            try {
              const res = await fetch(ep);
              if (!res.ok) return 0;
              const data = await res.json();
              return (data?.items ?? []).length;
            } catch {
              return 0;
            }
          })
        );
        const map: Record<string, number> = {};
        endpoints.forEach((ep, i) => {
          map[ep] = results[i];
        });
        setStats(map);
      } catch {
        setError("Could not load stats.");
      } finally {
        setLoading(false);
      }
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const endpoint = TABS.find((x) => x.id === t)?.endpoint;
      if (!endpoint) return;
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error("failed");
      const data = await res.json();
      setItems((data?.items ?? []) as AnyRow[]);
    } catch {
      setError("Could not load data.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open && authed) load(tab);
  }, [open, authed, tab]);

  // Reset state when dialog closes
  const handleClose = (v: boolean) => {
    if (!v) {
      setAuthError(false);
    }
    onOpenChange(v);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[92vh] overflow-hidden p-0 sm:max-w-4xl">
        <div className="flex h-[80vh] flex-col">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-border bg-gradient-to-r from-forest-700 to-forest-900 px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-leaf-500/20 ring-1 ring-leaf-400/40">
                <LayoutDashboard className="size-5 text-leaf-400" />
              </div>
              <div>
                <DialogTitle className="text-base font-bold leading-tight">
                  WasteCure Staff Dashboard
                </DialogTitle>
                <p className="text-xs text-forest-100/70">
                  {authed ? "View enquiries, pickups, volunteers and more" : "Staff access required"}
                </p>
              </div>
            </div>
            {authed ? (
              <div className="flex gap-1">
                <button
                  onClick={logout}
                  aria-label="Log out"
                  title="Log out"
                  className="flex size-8 items-center justify-center rounded-full text-forest-100/80 hover:bg-white/10 transition"
                >
                  <LogOut className="size-4" />
                </button>
                <button
                  onClick={() => handleClose(false)}
                  aria-label="Close dashboard"
                  className="flex size-8 items-center justify-center rounded-full text-forest-100/80 hover:bg-white/10 transition"
                >
                  <X className="size-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleClose(false)}
                aria-label="Close dashboard"
                className="flex size-8 items-center justify-center rounded-full text-forest-100/80 hover:bg-white/10 transition"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Auth gate */}
          {!authed ? (
            <div className="flex flex-1 items-center justify-center bg-background p-8">
              <form onSubmit={submitAuth} className="w-full max-w-sm space-y-4">
                <div className="text-center">
                  <Lock className="mx-auto mb-3 size-7 text-primary" />
                  <h3 className="text-lg font-semibold">Staff login</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Enter the staff password to view submissions.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="admin-pass">Password</Label>
                  <Input
                    id="admin-pass"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setAuthError(false);
                    }}
                    placeholder="Enter password"
                    autoFocus
                  />
                  {authError && (
                    <p className="text-xs text-destructive">
                      Incorrect password. Please try again.
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  <Lock className="size-4" />
                  Unlock dashboard
                </Button>
                <p className="text-center text-[11px] text-muted-foreground">
                  Demo password: <code className="rounded bg-muted px-1.5 py-0.5 font-mono">wastecure2024</code>
                </p>
              </form>
            </div>
          ) : (
            <>
              {/* Tabs */}
              <div className="flex items-center gap-1 overflow-x-auto border-b border-border bg-muted/40 px-3 py-2">
                {TABS.map((t) => {
                  const Icon = t.icon;
                  const active = tab === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTab(t.id)}
                      className={cn(
                        "flex shrink-0 items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                        active
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-foreground/70 hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <Icon className="size-3.5" />
                      {t.label}
                    </button>
                  );
                })}
                <div className="ml-auto pr-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => load(tab)}
                    disabled={loading}
                    className="h-8 px-2"
                  >
                    <RefreshCw className={cn("size-3.5", loading && "animate-spin")} />
                  </Button>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto bg-background p-4">
                {tab === "overview" ? (
                  <OverviewTab stats={stats} loading={loading} />
                ) : loading ? (
                  <div className="flex h-full items-center justify-center">
                    <Loader2 className="size-6 animate-spin text-muted-foreground" />
                  </div>
                ) : error ? (
                  <div className="flex h-full items-center justify-center text-sm text-destructive">
                    {error}
                  </div>
                ) : items.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
                    <Mail className="mb-2 size-8 opacity-40" />
                    <p className="text-sm">No records yet.</p>
                  </div>
                ) : (
                  <div className="grid gap-3">
                    <p className="text-xs text-muted-foreground">
                      {items.length} record{items.length === 1 ? "" : "s"}
                    </p>
                    {items.map((row, i) => (
                      <motion.div
                        key={(row.id as string) || i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: Math.min(i * 0.03, 0.3) }}
                        className="rounded-xl border border-border bg-card p-4 shadow-sm"
                      >
                        <div className="mb-3 flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h4 className="truncate text-sm font-semibold">
                              {tab === "newsletter"
                                ? (row.email as string)
                                : tab === "notifications"
                                ? (row.subject as string) || "Notification"
                                : (row.name as string) || "-"}
                            </h4>
                            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="size-3" />
                                {fmtDate(row.createdAt)}
                              </span>
                              {tab === "pickups" && row.phone && (
                                <span className="flex items-center gap-1">
                                  <Phone className="size-3" />
                                  {String(row.phone)}
                                </span>
                              )}
                              {tab === "pickups" && row.location && (
                                <span className="flex items-center gap-1">
                                  <MapPin className="size-3" />
                                  {String(row.location)}
                                </span>
                              )}
                            </div>
                          </div>
                          {row.status && (
                            <Badge variant="secondary" className="shrink-0 capitalize">
                              {String(row.status)}
                            </Badge>
                          )}
                        </div>
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
                          {tab === "contacts" && (
                            <>
                              <Cell label="Email" value={row.email} />
                              <Cell label="Phone" value={row.phone} />
                              <Cell label="Organisation" value={row.organisation} />
                              <Cell label="Service" value={row.service} />
                              <Cell label="Location" value={row.location} />
                            </>
                          )}
                          {tab === "pickups" && (
                            <>
                              <Cell label="Waste type" value={row.wasteType} />
                              <Cell label="Volume" value={row.volume} />
                              <Cell label="Address" value={row.address} />
                              <Cell label="Email" value={row.email} />
                              <Cell label="Preferred date" value={row.preferredDate} />
                            </>
                          )}
                          {tab === "volunteers" && (
                            <>
                              <Cell label="Phone" value={row.phone} />
                              <Cell label="Email" value={row.email} />
                              <Cell label="Location" value={row.location} />
                              <Cell label="Role" value={row.role} />
                            </>
                          )}
                          {tab === "newsletter" && (
                            <Cell label="Name" value={row.name} />
                          )}
                        </dl>
                        {tab === "contacts" && row.message && (
                          <p className="mt-3 rounded-lg bg-muted/50 p-3 text-sm text-foreground/90">
                            {String(row.message)}
                          </p>
                        )}
                        {tab === "pickups" && row.notes && (
                          <p className="mt-3 rounded-lg bg-muted/50 p-3 text-sm text-foreground/90">
                            {String(row.notes)}
                          </p>
                        )}
                        {tab === "volunteers" && row.message && (
                          <p className="mt-3 rounded-lg bg-muted/50 p-3 text-sm text-foreground/90">
                            {String(row.message)}
                          </p>
                        )}
                        {tab === "chat" && (
                          <p className="mt-1 text-sm text-foreground/90">
                            <span className="font-medium capitalize">
                              {String(row.role)}:
                            </span>{" "}
                            {String(row.content)}
                          </p>
                        )}
                        {tab === "notifications" && (
                          <div className="mt-2">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Mail className="size-3" />
                              To: {String(row.to || row["to"] || "-")}
                              {row.type && (
                                <Badge variant="outline" className="capitalize">
                                  {String(row.type)}
                                </Badge>
                              )}
                            </div>
                            <p className="mt-2 whitespace-pre-wrap rounded-lg bg-muted/50 p-3 text-xs text-foreground/90 max-h-32 overflow-y-auto">
                              {String(row.body || row["body"] || "-")}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function OverviewTab({
  stats,
  loading,
}: {
  stats: Record<string, number>;
  loading: boolean;
}) {
  const cards = [
    { key: "/api/contact", label: "Enquiries", icon: Mail, color: "text-leaf-500" },
    { key: "/api/pickup", label: "Pickup Requests", icon: Truck, color: "text-amber-earth" },
    { key: "/api/volunteer", label: "Volunteers", icon: Users, color: "text-leaf-400" },
    { key: "/api/newsletter", label: "Newsletter Subs", icon: Newspaper, color: "text-clay" },
    { key: "/api/notifications", label: "Notifications", icon: Bell, color: "text-amber-earth" },
    { key: "/api/chat", label: "Chat Messages", icon: MessageSquare, color: "text-forest-500" },
  ];

  return (
    <div>
      <h3 className="mb-1 text-sm font-semibold text-foreground">Submission overview</h3>
      <p className="mb-4 text-xs text-muted-foreground">
        A summary of all records received through the website.
      </p>
      {loading ? (
        <div className="flex h-40 items-center justify-center">
          <Loader2 className="size-6 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const count = stats[c.key] ?? 0;
            return (
              <motion.div
                key={c.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div
                  aria-hidden
                  className="absolute -right-4 -top-4 size-20 rounded-full bg-primary/5 blur-2xl"
                />
                <div className="relative flex items-start justify-between">
                  <div>
                    <div className="text-3xl font-bold tabular-nums text-foreground">
                      {count}
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                  </div>
                  <Icon className={cn("size-5", c.color)} />
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
