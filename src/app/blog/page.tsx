import { PageHeader } from "@/components/site/page-header";
import { BlogList } from "@/components/site/blog-list";
import { ARTICLES } from "@/lib/articles";
import { PHOTOS } from "@/lib/photos";

export const metadata = {
  title: "Blog",
  description:
    "Practical guides and updates on waste, recycling and cleaning in Ghana, from the WasteCure team.",
};

export default function BlogPage() {
  const articles = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Practical guides and updates on waste, recycling and cleaning in Ghana."
        photo={PHOTOS.groupCandid}
      />
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogList articles={articles} />
        </div>
      </section>
    </>
  );
}
