"use client";

import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hero } from "@/components/site/hero";
import { HomeStats } from "@/components/site/home-stats";
import { CTASection } from "@/components/site/cta-section";
import { SERVICES, IMAGES } from "@/lib/site-data";
import { ARTICLES } from "@/lib/articles";

const OFFER_CARDS = [
  {
    title: "Waste Collection",
    description:
      "Door-to-door and drop-off waste collection across Ghana.",
  },
  {
    title: "Recycling & Sorting",
    description:
      "Sorted, baled and channelled to recycling off-takers - keeping plastic out of landfill.",
  },
  {
    title: "Cleaning Services",
    description:
      "Professional cleaning for schools, corporate offices, and residential facilities.",
  },
  {
    title: "Consultancy",
    description:
      "Practical advisory for schools, businesses, assemblies and residential communities.",
  },
];

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

export default function Home() {
  const featured = ARTICLES[0];

  return (
    <>
      <Hero />

      {/* What We Offer - 4 short cards, no icons */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Advanced waste solutions for cleaner communities
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              We give households, businesses and institutions across Ghana a
              real, sustainable option for waste management - backed by
              education and a recycling-first approach.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OFFER_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="h-full rounded-2xl border-border/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="flex h-full flex-col p-6">
                    <h3 className="text-lg font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                Explore all services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <HomeStats />

      {/* Featured services preview */}
      <section className="relative bg-muted/20 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Collection, recycling, cleaning & advisory
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              From waste collection to consultancy for institutions, our
              services are designed to keep communities clean and support a
              circular economy in Ghana.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/services#${service.id}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base text-leaf-600 font-medium italic">
                      {service.short}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                      Learn more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                See all services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured blog post preview */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              From the WasteCure blog
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Practical tips, community updates and education on waste and
              recycling in Ghana.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mt-12"
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
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    Featured · {featured.category}
                  </span>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      {fmtDate(featured.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {featured.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {featured.title}
                  </h3>
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

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                Read the blog
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <CTASection
        title="Ready to make a difference?"
        subtitle="Request a pickup, ask about services, or partner with us. We respond within 1-2 business days."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Get involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
