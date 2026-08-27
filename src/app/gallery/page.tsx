import { PageHeader } from "@/components/site/page-header";
import { CTASection } from "@/components/site/cta-section";
import { GalleryGrid } from "@/components/site/gallery-grid";
import { REAL_PHOTOS } from "@/lib/site-data";

export const metadata = {
  title: "Gallery",
  description:
    "Photos from WasteCure's waste collection rounds, cleaning jobs and community work across Ghana.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Real photos from our collection rounds, cleaning jobs and community work across Ghana."
        image={REAL_PHOTOS.groupPhoto1}
      />

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      <CTASection
        title="Want to see WasteCure in your community?"
        subtitle="Request a pickup, ask about cleaning services, or partner with us."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Get involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
