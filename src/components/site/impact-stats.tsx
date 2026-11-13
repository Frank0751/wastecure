import { Stats } from "@/components/site/stats";

/** Impact section on the Sustainability page. */
export function ImpactStats() {
  return (
    <section id="impact" className="scroll-mt-20 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Where we are today
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            We would rather show small, real numbers than large, vague ones.
            These are counted from our own collection rounds.
          </p>
        </div>

        <div className="mt-10">
          <Stats />
        </div>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">
            Coverage today: Afigya Kwabre South District.
          </span>{" "}
          Door-to-door collection, drop-off points and scheduled pickups in
          about five communities along the Afrancho to Kodie stretch, with
          plans to expand across the Ashanti Region and beyond.
        </p>
      </div>
    </section>
  );
}
