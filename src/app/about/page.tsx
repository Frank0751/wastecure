import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { CTASection } from "@/components/site/cta-section";
import { Reveal } from "@/components/site/reveal";
import { REAL_PHOTOS, MILESTONES, TEAM, VISION, MISSION, CORE_VALUES } from "@/lib/site-data";
import { TeamAvatar } from "@/components/site/team-avatar";

export const metadata = {
  title: "About Us",
  description:
    "WasteCure is a Ghanaian waste management and recycling company founded in 2021 in Kwabre East Municipality. Meet our team and learn about our journey.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Who We Are"
        subtitle="A Ghanaian waste management and recycling company working to reduce plastic waste, one community at a time."
        image={REAL_PHOTOS.groupPhoto1}
      />

      {/* Story section */}
      <section className="relative bg-background py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal x={-30}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
                A Ghanaian answer to plastic waste
              </h2>
              <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  WasteCure Limited Company was founded in{" "}
                  <span className="font-semibold text-foreground">2021</span> by{" "}
                  <span className="font-semibold text-foreground">
                    George Adomako
                  </span>{" "}
                  in Kumasi, Ashanti Region. The idea was simple: give people in
                  the Kwabre East Municipality a responsible place to take
                  plastic waste, rather than dumping or burning it.
                </p>
                <p>
                  What started as a small, mission-driven operation has grown
                  into a community-rooted waste management company - combining
                  collection, recycling, cleaning services, education and
                  consultancy, now serving communities across the Ashanti
                  Region.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-lg border border-border bg-card px-4 py-2.5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Founded
                  </div>
                  <div className="text-base font-bold text-foreground">2021</div>
                </div>
                <div className="rounded-lg border border-border bg-card px-4 py-2.5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Based
                  </div>
                  <div className="text-base font-bold text-foreground">
                    Kumasi, Ghana
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-card px-4 py-2.5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Focus
                  </div>
                  <div className="text-base font-bold text-foreground">
                    Plastic & Recycling
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal x={30}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
                    <img
                      src={REAL_PHOTOS.wheelbarrowCollection}
                      alt="WasteCure crew collecting waste near a market"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl shadow-md">
                    <img
                      src={REAL_PHOTOS.marketEngagement}
                      alt="WasteCure field team engaging shopkeepers"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square overflow-hidden rounded-2xl shadow-md">
                    <img
                      src={REAL_PHOTOS.skipLoading2}
                      alt="WasteCure crew loading a district waste skip"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
                    <img
                      src={REAL_PHOTOS.streetCrew}
                      alt="WasteCure street clean-up crew"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="relative bg-gradient-to-br from-forest-50/50 via-background to-leaf-50/30 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal y={24}>
            <div className="relative rounded-2xl border border-primary/15 bg-card p-8 md:p-12 shadow-sm">
              <Quote className="size-8 text-primary fill-primary/20" />
              <p className="mt-4 text-xl md:text-2xl font-medium text-foreground italic leading-relaxed text-balance">
                &ldquo;{MISSION}&rdquo;
              </p>
              <p className="mt-5 text-sm font-semibold text-primary">
                WasteCure Mission Statement
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Reveal x={-24} delay={0.05}>
              <Card className="h-full rounded-2xl border-border/60 bg-card">
                <CardContent className="p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Our Vision
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                    {VISION}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal x={24} delay={0.1}>
              <Card className="h-full rounded-2xl border-border/60 bg-card">
                <CardContent className="p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Our Core Values - CURE
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {CORE_VALUES.map((v) => (
                      <li key={v.letter} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                          {v.letter}
                        </span>
                        <span>
                          <span className="font-medium text-foreground">{v.word}</span>
                          {" — "}
                          {v.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section id="timeline" className="relative bg-background py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              From an idea to a movement
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Key milestones in the WasteCure journey - from founding in 2021 to
              scaling across the Ashanti Region.
            </p>
          </Reveal>

          <div className="mt-16 relative">
            {/* Central vertical line */}
            <div
              aria-hidden
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-leaf-500 via-primary to-amber-earth"
            />
            <div className="space-y-10 md:space-y-16">
              {MILESTONES.map((m, i) => {
                const isRight = i % 2 === 1;
                return (
                  <Reveal
                    key={`${m.year}-${m.title}`}
                    className={`relative flex items-center gap-6 md:gap-0 ${
                      isRight ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Dot on the line */}
                    <div
                      aria-hidden
                      className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 size-4 rounded-full bg-primary ring-4 ring-background"
                    >
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                    </div>

                    {/* Spacer for the other side on desktop */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Card */}
                    <div className="flex-1 pl-10 md:pl-0 md:w-1/2 md:px-8">
                      <Card className="h-full rounded-2xl border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold text-foreground">
                            <span className="text-primary">{m.year}</span> {m.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            {m.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section id="team" className="relative bg-muted/20 py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              The people behind WasteCure
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              A small, dedicated team working across collection, sorting,
              community engagement and education.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <Card className="h-full rounded-2xl border-border/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="flex h-full flex-col p-6">
                    <TeamAvatar name={member.name} image={member.image} />
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Want to join the team or partner with us?
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's build a cleaner Ghana together"
        subtitle="Request a pickup, ask about services, or partner with us. We respond within 1-2 business days."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Get involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
