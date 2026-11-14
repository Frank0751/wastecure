import { PageHeader } from "@/components/site/page-header";
import { CTASection } from "@/components/site/cta-section";
import { GalleryGrid } from "@/components/site/gallery-grid";
import { PHOTOS } from "@/lib/photos";

export const metadata = {
  title: "Gallery",
  description:
    "Photos from WasteCure's collection rounds, clean-ups and crew meetings.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Photos from our collection rounds, clean-ups and crew meetings."
        photo={PHOTOS.cleaningCrew}
      />

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      <CTASection
        title="Want this in your community?"
        subtitle="Request a pickup, ask about cleaning services, or partner with us."
      />
    </>
  );
}
