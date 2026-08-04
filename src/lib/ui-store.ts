import { create } from "zustand";

/**
 * Lightweight UI store for cross-component interactions.
 * Used so the header "Request Pickup" CTA, footer "Staff" link, and
 * footer "Privacy" link can open dialogs that live at the page level.
 */
type UIState = {
  pickupWizardOpen: boolean;
  setPickupWizardOpen: (v: boolean) => void;
  openPickupWizard: () => void;
  closePickupWizard: () => void;
  adminOpen: boolean;
  setAdminOpen: (v: boolean) => void;
  openAdmin: () => void;
  closeAdmin: () => void;
  privacyOpen: boolean;
  setPrivacyOpen: (v: boolean) => void;
  openPrivacy: () => void;
  closePrivacy: () => void;
  termsOpen: boolean;
  setTermsOpen: (v: boolean) => void;
  openTerms: () => void;
  closeTerms: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  pickupWizardOpen: false,
  setPickupWizardOpen: (v) => set({ pickupWizardOpen: v }),
  openPickupWizard: () => set({ pickupWizardOpen: true }),
  closePickupWizard: () => set({ pickupWizardOpen: false }),
  adminOpen: false,
  setAdminOpen: (v) => set({ adminOpen: v }),
  openAdmin: () => set({ adminOpen: true }),
  closeAdmin: () => set({ adminOpen: false }),
  privacyOpen: false,
  setPrivacyOpen: (v) => set({ privacyOpen: v }),
  openPrivacy: () => set({ privacyOpen: true }),
  closePrivacy: () => set({ privacyOpen: false }),
  termsOpen: false,
  setTermsOpen: (v) => set({ termsOpen: v }),
  openTerms: () => set({ termsOpen: true }),
  closeTerms: () => set({ termsOpen: false }),
}));
