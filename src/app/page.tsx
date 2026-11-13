import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { Photo } from "@/components/site/photo";
import { Reveal } from "@/components/site/reveal";
import { CTASection } from "@/components/site/cta-section";
import { SERVICES } from "@/lib/site-data";
import { ARTICLES, formatArticleDate } from "@/lib/articles";
import { PHOTOS } from "@/lib/photos";

export default function Home() {
  const latest = [...ARTICLES]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <Hero />

      {/* Figures */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stats />
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl lg:text-5xl">
                What we do
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Four services for households, businesses, schools and
                assemblies. Each one can be booked on its own or combined.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/services">
                All services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={(i % 2) * 0.08}>
                <Link href={`/services#${service.id}`} className="group block">
                  <div className="aspect-[3/2] overflow-hidden rounded-xl bg-muted">
                    <Photo
                      id={service.photo}
                      alt={service.photoAlt}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-5 flex items-center gap-2 text-xl font-semibold text-foreground">
                    {service.title}
                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
            <Photo
              id={PHOTOS.group}
              alt="The WasteCure crew and staff in high-visibility vests"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="size-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
              A Kumasi company, working street by street
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              WasteCure was founded in 2021. Today our crews work in the
              Afigya Kwabre South District, collecting waste, sweeping
              roadsides and markets, and loading what they gather for proper
              disposal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/about">
                  About us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/gallery">See our work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              From the blog
            </h2>
            <Button asChild variant="outline">
              <Link href="/blog">
                All articles
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <ul className="mt-10 divide-y divide-border border-y border-border">
            {latest.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group grid gap-2 py-6 md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-8"
                >
                  <time
                    dateTime={article.date}
                    className="text-sm text-muted-foreground"
                  >
                    {formatArticleDate(article.date)}
                  </time>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-xl">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {article.excerpt}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {article.category}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Need waste collected or a space cleaned?"
        subtitle="Tell us what you need and where. We reply within one to two business days."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Our services"
        secondaryHref="/services"
      />
    </>
  );
}
