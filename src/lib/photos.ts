// WasteCure's own field photography, hosted on their Cloudinary account.
// Every image on the site comes from here; there is no stock photography.

const BASE = "https://res.cloudinary.com/dh1gxbiuw/image/upload";
const WIDTHS = [480, 768, 1080, 1600, 2400];

export const PHOTOS = {
  /** Crew being briefed on a pavement before a street clean-up. Portrait. */
  streetBriefing: "IMG-20260518-WA0016_a4gluv",
  /** Crew tipping a wheelbarrow into an Afigya Kwabre South District skip. */
  skipLoading: "IMG-20260523-WA0007_hxzsns",
  /** Crew filling a wheelbarrow with collected waste beside a timber yard. */
  wheelbarrow: "IMG-20260523-WA0012_izrdfz",
  /** Crew member carrying a head pan to a district skip. Portrait. */
  skipHeadPan: "IMG-20260523-WA0015_cwmo1c",
  /** Six crew members with brooms in front of a market under construction. */
  cleaningCrew: "IMG_0172_yhjxxb",
  /** Supervisor handing out brooms to two crew members. Portrait. */
  broomHandover: "IMG_0176_dbwx9u",
  /** One crew member sweeping a roadside at dusk. Portrait, low resolution. */
  duskSweep: "IMG_0201_f215xe",
  /** Crew briefing seen from behind a WasteCure vest. */
  crewBriefing: "IMG_5441_slb1g2",
  /** Whole crew and staff, group photo. */
  group: "IMG_5446_sivl7j",
  /** Whole crew and staff, second group photo. */
  groupCandid: "IMG_5447_jzjmz8",
} as const;

export type PhotoId = (typeof PHOTOS)[keyof typeof PHOTOS];

/** A single delivery URL, resized by Cloudinary and served as AVIF/WebP. */
export function photoUrl(id: string, width: number): string {
  return `${BASE}/f_auto,q_auto,c_limit,w_${width}/${id}`;
}

export function photoSrcSet(id: string): string {
  return WIDTHS.map((w) => `${photoUrl(id, w)} ${w}w`).join(", ");
}
