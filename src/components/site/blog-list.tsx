"use client";

import { useState } from "react";
import Link from "next/link";
import { Photo } from "@/components/site/photo";
import { formatArticleDate, type Article } from "@/lib/articles";
import { cn } from "@/lib/utils";

type Filter = Article["category"] | "All";

export function BlogList({ articles }: { articles: Article[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const categories: Filter[] = [
    "All",
    ...Array.from(new Set(articles.map((a) => a.category))),
  ];
  const shown =
    filter === "All" ? articles : articles.filter((a) => a.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              filter === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((article) => (
          <li key={article.slug}>
            <Link href={`/blog/${article.slug}`} className="group block">
              <div className="aspect-[3/2] overflow-hidden rounded-xl bg-muted">
                <Photo
                  id={article.photo}
                  alt=""
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {article.category} · {formatArticleDate(article.date)} · {article.readTime}
              </p>
              <h2 className="mt-2 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                {article.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
