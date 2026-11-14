import { Check, X, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { CTASection } from "@/components/site/cta-section";
import { Reveal } from "@/components/site/reveal";
import { ImpactStats } from "@/components/site/impact-stats";
import { PHOTOS } from "@/lib/photos";
import { Photo } from "@/components/site/photo";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Sustainability",
  description:
    "WasteCure's environmental commitment: diverting plastic from landfill, supporting Ghana's circular economy, and educating the next generation.",
};

// Comparison: WasteCure vs Dumping vs Burning across 8 criteria
type Cell = "yes" | "no" | "partial";

const COMPARISON_ROWS: { criterion: string; wastecure: Cell; dumping: Cell; burning: Cell }[] = [
  {
    criterion: "Keeps plastic out of the environment",
    wastecure: "yes",
    dumping: "no",
    burning: "no",
  },
  {
    criterion: "Protects air quality",
    wastecure: "yes",
    dumping: "yes",
    burning: "no",
  },
  {
    criterion: "Prevents drain blockages and flooding",
    wastecure: "yes",
    dumping: "no",
    burning: "yes",
  },
  {
    criterion: "Supports Ghana's circular economy",
    wastecure: "yes",
    dumping: "no",
    burning: "no",
  },
  {
    criterion: "Creates local jobs",
    wastecure: "yes",
    dumping: "no",
    burning: "no",
  },
  {
    criterion: "Educates the community",
    wastecure: "yes",
    dumping: "no",
    burning: "no",
  },
  {
    criterion: "Safe for families and children",
    wastecure: "yes",
    dumping: "partial",
    burning: "no",
  },
  {
    criterion: "Reduces landfill burden",
    wastecure: "yes",
    dumping: "no",
    burning: "yes",
  },
];

function CellMark({ value }: { value: Cell }) {
  if (value === "yes")
    return (
      <span className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-leaf-700">
        <span className="flex size-5 items-center justify-center rounded-full bg-leaf-500/15">
          <Check className="size-3" />
        </span>
        Yes
      </span>
    );
  if (value === "no")
    return (
      <span className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-destructive">
        <span className="flex size-5 items-center justify-center rounded-full bg-destructive/10">
          <X className="size-3" />
        </span>
        No
      </span>
    );
  return (
    <span className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-amber-earth">
      <span className="flex size-5 items-center justify-center rounded-full bg-amber-earth/15">
        <Minus className="size-3" />
      </span>
      Partial
    </span>
  );
}

export default function SustainabilityPage() {
  return (
    <>
      <PageHeader
        title="Sustainability"
        subtitle="Waste that is collected and sorted stays out of drains, waterways and open fires."
        photo={PHOTOS.skipLoading}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
              Our environmental commitment
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Plastic waste clogs drains, pollutes waterways and ends up on
                farmland. Every load we collect is a load kept out of the
                environment.
              </p>
              <p>
                We work with households, businesses and institutions to make
                responsible disposal easy. Recyclable plastic is sorted and
                passed on to recyclers; the rest goes to proper disposal.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
            <Photo
              id={PHOTOS.wheelbarrow}
              alt="WasteCure crew filling a wheelbarrow with collected waste"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impact section with count-up animation - dark green background */}
      <ImpactStats />

      {/* Comparison table */}
      <section
        id="comparison"
        className="bg-muted/20 py-20 md:py-28 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              The right way to handle plastic waste
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              How WasteCure compares to dumping and burning - the two most
              common ways plastic is currently handled in many Ghanaian
              communities.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <Card className="overflow-hidden rounded-2xl border-border/60 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      <th className="p-4 md:p-5 text-sm font-semibold text-foreground">
                        Criterion
                      </th>
                      <th className="p-4 md:p-5 text-center text-sm font-semibold text-primary bg-primary/5">
                        WasteCure
                        <div className="mt-1 text-[10px] uppercase tracking-wider text-primary/70 font-bold">
                          Recommended
                        </div>
                      </th>
                      <th className="p-4 md:p-5 text-center text-sm font-semibold text-foreground">
                        Dumping
                      </th>
                      <th className="p-4 md:p-5 text-center text-sm font-semibold text-foreground">
                        Burning
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row, i) => (
                      <tr
                        key={row.criterion}
                        className={cn(
                          "border-b border-border/60 last:border-b-0",
                          i % 2 === 1 && "bg-muted/20"
                        )}
                      >
                        <td className="p-4 md:p-5 text-sm text-foreground/90">
                          {row.criterion}
                        </td>
                        <td className="p-4 md:p-5 text-center bg-primary/5">
                          <CellMark value={row.wastecure} />
                        </td>
                        <td className="p-4 md:p-5 text-center">
                          <CellMark value={row.dumping} />
                        </td>
                        <td className="p-4 md:p-5 text-center">
                          <CellMark value={row.burning} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-leaf-500/15 text-leaf-700">
                  <Check className="size-3" />
                </span>
                Yes - better for people and planet
              </span>
              <span className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-amber-earth/15 text-amber-earth">
                  <Minus className="size-3" />
                </span>
                Partial
              </span>
              <span className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <X className="size-3" />
                </span>
                No - harmful
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Be part of the solution"
        subtitle="Whether you have an hour, a shop, or a whole community behind you - there is a role for you in the WasteCure movement."
        primaryLabel="Get involved"
        primaryHref="/get-involved"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </>
  );
}
