import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/site/photo";
import { CTASection } from "@/components/site/cta-section";
import { ARTICLES, formatArticleDate } from "@/lib/articles";
import { photoUrl } from "@/lib/photos";
import { SITE } from "@/lib/site-data";

type Params = { slug: string };

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      images: [{ url: photoUrl(article.photo, 1200), alt: article.title }],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = ARTICLES.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  )
    .concat(ARTICLES.filter((a) => a.slug !== article.slug && a.category !== article.category))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    image: photoUrl(article.photo, 1200),
    author: { "@type": "Organization", name: SITE.legalName },
    publisher: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/blog/${article.slug}`,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="bg-background pt-12 md:pt-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All articles
          </Link>
          <p className="mt-8 text-sm text-muted-foreground">
            {article.category} ·{" "}
            <time dateTime={article.date}>{formatArticleDate(article.date)}</time> ·{" "}
            {article.readTime}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
            {article.title}
          </h1>
        </div>
        <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] overflow-hidden rounded-xl bg-muted">
            <Photo
              id={article.photo}
              alt=""
              sizes="(min-width: 1024px) 64rem, 100vw"
              priority
              className="size-full object-cover"
            />
          </div>
        </div>
      </header>

      <div className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg font-medium leading-relaxed text-foreground md:text-xl">
            {article.body[0]?.text}
          </p>

          {article.body.slice(1).map((para, i) => (
            <section key={i}>
              {para.heading && (
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-foreground">
                  {para.heading}
                </h2>
              )}
              <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">
                {para.text}
              </p>
            </section>
          ))}

          {article.sources.length > 0 && (
            <section className="mt-14 border-t border-border pt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Sources
              </h2>
              <ul className="mt-4 space-y-3">
                {article.sources.map((source) => (
                  <li key={source.url} className="text-sm leading-relaxed">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline gap-1 font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                    >
                      {source.title}
                      <ArrowUpRight className="size-3.5 shrink-0 self-center" />
                    </a>
                    <span className="text-muted-foreground"> · {source.publisher}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      <section className="border-t border-border bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            More from the blog
          </h2>
          <ul className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel) => (
              <li key={rel.slug}>
                <Link href={`/blog/${rel.slug}`} className="group block">
                  <div className="aspect-[3/2] overflow-hidden rounded-xl bg-muted">
                    <Photo
                      id={rel.photo}
                      alt=""
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {rel.category} · {formatArticleDate(rel.date)}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {rel.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Need waste collected or a space cleaned?"
        subtitle="Tell us what you need and where. We reply within one to two business days."
        secondaryLabel="Our services"
        secondaryHref="/services"
      />
    </article>
  );
}
