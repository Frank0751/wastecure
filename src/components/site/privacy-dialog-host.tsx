"use client";

import { PrivacyPolicyDialog } from "@/components/site/privacy-policy-dialog";
import { useUIStore } from "@/lib/ui-store";

export function PrivacyDialogHost() {
  const open = useUIStore((s) => s.privacyOpen);
  const setOpen = useUIStore((s) => s.setPrivacyOpen);
  return <PrivacyPolicyDialog open={open} onOpenChange={setOpen} />;
}
