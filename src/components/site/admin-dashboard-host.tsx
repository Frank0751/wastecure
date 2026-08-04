"use client";

import { AdminDashboard } from "@/components/site/admin-dashboard";
import { useUIStore } from "@/lib/ui-store";

/**
 * Hosts the AdminDashboard dialog at the page level, wired to the
 * global UI store so the footer "Staff" link can open it.
 */
export function AdminDashboardHost() {
  const open = useUIStore((s) => s.adminOpen);
  const setOpen = useUIStore((s) => s.setAdminOpen);
  return <AdminDashboard open={open} onOpenChange={setOpen} />;
}
