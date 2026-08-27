import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Tag, ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ARTICLES } from "@/lib/articles";

type Params = { slug: string };

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: [{ url: article.image, alt: article.title }],
    },
  };
}

function fmtDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

const CATEGORY_COLORS: Record<string, string> = {
  Tips: "bg-leaf-500/15 text-leaf-700 border-leaf-500/30",
  News: "bg-primary/10 text-primary border-primary/30",
  Education: "bg-amber-earth/15 text-amber-earth border-amber-earth/30",
  Community: "bg-clay/15 text-clay border-clay/30",
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article>
      {/* Hero image */}
      <section className="relative isolate overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-end text-white">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 -z-10 size-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-900/95 via-forest-900/70 to-forest-900/40" />
        <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20" />

        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to blog
          </Link>

          <span
            className={`mt-6 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm bg-white/90 ${
              CATEGORY_COLORS[article.category] ?? CATEGORY_COLORS.News
            }`}
          >
            {article.category}
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
            {article.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <User className="size-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" />
              {fmtDate(article.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="size-4" />
              {article.category}
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
            {article.body[0]?.text}
          </p>

          <div className="mt-8 space-y-6">
            {article.body.slice(1).map((para, i) => (
              <div key={i}>
                {para.heading && (
                  <h2 className="mt-8 text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                    {para.heading}
                  </h2>
                )}
                <p className="mt-3 text-base md:text-lg leading-relaxed text-foreground/90">
                  {para.text}
                </p>
              </div>
            ))}
          </div>

          {/* Sources */}
          <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
            <div className="flex items-center gap-2">
              <BookOpen className="size-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">
                Sources and references
              </h2>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              This article is based on the following sources. We encourage you to
              read them for more detail.
            </p>
            <ul className="mt-5 space-y-3">
              {article.sources.map((source) => (
                <li
                  key={source.url}
                  className="flex flex-col gap-1 rounded-lg border border-border bg-card p-4"
                >
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3 font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <span>{source.title}</span>
                    <ExternalLink className="size-4 shrink-0 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <span className="text-xs text-muted-foreground">
                    {source.publisher}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground">
              Want to take action?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Request a pickup, partner with us, or get in touch - we would
              love to hear from you.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Button asChild size="sm">
                <Link href="/contact">Contact us</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/get-involved">Get involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="bg-muted/20 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Related articles
            </h2>
            <Button asChild variant="ghost" size="sm">
              <Link href="/blog">
                All articles
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    className={`absolute top-3 left-3 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm bg-white/90 ${
                      CATEGORY_COLORS[rel.category] ?? CATEGORY_COLORS.News
                    }`}
                  >
                    {rel.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      {fmtDate(rel.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {rel.readTime}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                    {rel.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                    Read article
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
