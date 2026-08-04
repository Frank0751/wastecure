"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Newspaper } from "lucide-react";
import { ARTICLES, type Article } from "@/lib/articles";
import { PageHeader } from "@/components/site/page-header";
import { IMAGES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const CATEGORIES: (Article["category"] | "All")[] = [
  "All",
  "Tips",
  "News",
  "Education",
  "Community",
];

const CATEGORY_COLORS: Record<Article["category"], string> = {
  Tips: "bg-leaf-500/15 text-leaf-700 border-leaf-500/30",
  News: "bg-primary/10 text-primary border-primary/30",
  Education: "bg-amber-earth/15 text-amber-earth border-amber-earth/30",
  Community: "bg-clay/15 text-clay border-clay/30",
};

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

export default function BlogPage() {
  const [filter, setFilter] = useState<Article["category"] | "All">("All");

  const filtered =
    filter === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === filter);

  const featured = ARTICLES[0];

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Practical tips, community updates and education on waste and recycling in Ghana."
        image={IMAGES.community[0]}
      />

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured article */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-muted">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    className={cn(
                      "absolute top-4 left-4 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm bg-white/90",
                      CATEGORY_COLORS[featured.category]
                    )}
                  >
                    Featured · {featured.category}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      {fmtDate(featured.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
                    Read article
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Category filter */}
          <div className="mt-12 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2">
              <Newspaper className="size-3.5" />
              Filter
            </span>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
                  filter === c
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Article grid */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span
                      className={cn(
                        "absolute top-3 left-3 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm bg-white/90",
                        CATEGORY_COLORS[article.category]
                      )}
                    >
                      {article.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        {fmtDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                      Read article
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 text-center text-muted-foreground">
              No articles in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
