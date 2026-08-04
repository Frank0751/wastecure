"use client";

import { TermsDialog } from "@/components/site/terms-dialog";
import { useUIStore } from "@/lib/ui-store";

export function TermsDialogHost() {
  const open = useUIStore((s) => s.termsOpen);
  const setOpen = useUIStore((s) => s.setTermsOpen);
  return <TermsDialog open={open} onOpenChange={setOpen} />;
}
