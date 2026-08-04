"use client";

import { PickupWizard } from "@/components/site/pickup-wizard";
import { useUIStore } from "@/lib/ui-store";

/**
 * Hosts the PickupWizard dialog at the page level and wires it to the
 * global UI store so any component (e.g. the header CTA) can open it.
 */
export function PickupWizardHost() {
  const open = useUIStore((s) => s.pickupWizardOpen);
  const setOpen = useUIStore((s) => s.setPickupWizardOpen);

  return <PickupWizard open={open} onOpenChange={setOpen} />;
}
