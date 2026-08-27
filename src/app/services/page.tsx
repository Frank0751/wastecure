import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { CTASection } from "@/components/site/cta-section";
import { Reveal } from "@/components/site/reveal";
import { SERVICES, PROCESS_STEPS, REAL_PHOTOS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Our Services",
  description:
    "Waste collection, recyclables sorting, cleaning services and waste management consultancy from WasteCure, serving Ghana.",
};

// 7 plastic types for the waste guide (text labels only, no emojis)
const PLASTIC_TYPES = [
  {
    code: "PET",
    number: "#1",
    name: "Polyethylene Terephthalate",
    examples: "Water bottles, drink bottles, food jars",
    recyclable: "Recyclable",
  },
  {
    code: "HDPE",
    number: "#2",
    name: "High-Density Polyethylene",
    examples: "Milk jugs, detergent bottles, shampoo bottles",
    recyclable: "Recyclable",
  },
  {
    code: "PVC",
    number: "#3",
    name: "Polyvinyl Chloride",
    examples: "Pipes, vinyl flooring, some packaging",
    recyclable: "Not accepted",
  },
  {
    code: "LDPE",
    number: "#4",
    name: "Low-Density Polyethylene",
    examples: "Plastic bags, film, squeeze bottles",
    recyclable: "Partially accepted",
  },
  {
    code: "PP",
    number: "#5",
    name: "Polypropylene",
    examples: "Yogurt containers, bottle caps, straws",
    recyclable: "Partially accepted",
  },
  {
    code: "PS",
    number: "#6",
    name: "Polystyrene",
    examples: "Foam cups, takeaway containers, packing peanuts",
    recyclable: "Not accepted",
  },
  {
    code: "Other",
    number: "#7",
    name: "Mixed / Other Plastics",
    examples: "Mixed plastics, polycarbonate, bioplastics",
    recyclable: "Not accepted",
  },
];

function recyclabilityBadge(level: string) {
  if (level === "Recyclable")
    return "bg-leaf-500/15 text-leaf-700 border-leaf-500/30";
  if (level === "Partially accepted")
    return "bg-amber-earth/15 text-amber-earth border-amber-earth/30";
  return "bg-destructive/10 text-destructive border-destructive/30";
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="From waste collection and recycling to cleaning services and consultancy, our services are designed to keep communities clean and support a circular economy across Ghana."
        image={REAL_PHOTOS.streetCrew}
      />

      {/* 4 service sections with alternating layout */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="space-y-20 md:space-y-28">
            {SERVICES.map((service, i) => {
              const reverse = i % 2 === 1;
              return (
                <Reveal
                  key={service.id}
                  id={service.id}
                  y={32}
                  className={cn(
                    "grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 scroll-mt-24"
                  )}
                >
                  <div className={cn("relative", reverse && "lg:order-2")}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="size-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />
                    </div>
                  </div>

                  <div className={cn(reverse && "lg:order-1")}>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-base text-leaf-600 font-medium italic">
                      {service.short}
                    </p>
                    <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-foreground/80"
                        >
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-leaf-500/15 text-leaf-600">
                            <Check className="size-3" />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button asChild size="sm" variant="outline">
                        <Link href="/contact">
                          Request this service
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="ghost">
                        <Link href="/sustainability">Learn about our impact</Link>
                      </Button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="relative bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              From collection to recycling
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              A simple, transparent journey that keeps plastic out of Ghana&apos;s
              environment and turns it back into value.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <Card className="h-full rounded-2xl border-border/60 bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="flex h-full flex-col p-6">
                    <span className="text-4xl font-bold text-primary/20">
                      {step.step}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Waste types guide */}
      <section
        id="waste-guide"
        className="bg-background py-20 md:py-28 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Know your plastics
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Plastic is sorted by resin identification codes 1 to 7. Here&apos;s
              what each code means and whether WasteCure accepts it.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PLASTIC_TYPES.map((p, i) => (
              <Reveal key={p.code} delay={(i % 3) * 0.08}>
                <Card className="h-full rounded-2xl border-border/60 bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">
                          {p.code}
                        </span>
                        <span className="text-sm font-mono text-muted-foreground">
                          {p.number}
                        </span>
                      </div>
                      <span
                        className={cn(
                          "rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider",
                          recyclabilityBadge(p.recyclable)
                        )}
                      >
                        {p.recyclable}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-foreground">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {p.examples}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-leaf-500" />
              Recyclable - we accept it
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-amber-earth" />
              Partially accepted - ask us
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-destructive" />
              Not accepted
            </span>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service fits you?"
        subtitle="Talk to our team about your home, business, school or community. We will design a waste management approach that works for you."
        primaryLabel="Get in touch"
        primaryHref="/contact"
        secondaryLabel="See our impact"
        secondaryHref="/sustainability"
      />
    </>
  );
}
