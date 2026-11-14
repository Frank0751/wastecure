import { PageHeader } from "@/components/site/page-header";
import { CTASection } from "@/components/site/cta-section";
import { Photo } from "@/components/site/photo";
import { Reveal } from "@/components/site/reveal";
import { TeamAvatar } from "@/components/site/team-avatar";
import { PHOTOS } from "@/lib/photos";
import { TEAM, VISION, MISSION, CORE_VALUES } from "@/lib/site-data";

export const metadata = {
  title: "About Us",
  description:
    "WasteCure is a Ghanaian waste management company founded in 2021 and based in Kumasi. Our vision, mission, values and the team behind the work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Who we are"
        subtitle="A Ghanaian waste management company, founded in 2021 and based in Kumasi."
        photo={PHOTOS.group}
      />

      {/* Story */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
              Our story
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                WasteCure Limited Company was founded in 2021 by George
                Adomako. It began in the Kwabre East Municipality with a
                simple aim: give people a responsible place to take plastic
                waste, rather than dumping or burning it.
              </p>
              <p>
                The company has since grown into waste collection, recycling,
                cleaning services and consultancy. Our crews currently work
                in the Afigya Kwabre South District, and we take on clients
                across Ghana.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-muted">
              <Photo
                id={PHOTOS.broomHandover}
                alt="A WasteCure supervisor handing brooms to two crew members"
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="size-full object-cover"
              />
            </div>
            <div className="mt-10 aspect-[3/4] overflow-hidden rounded-xl bg-muted">
              <Photo
                id={PHOTOS.streetBriefing}
                alt="Crew members being briefed on a pavement before a clean-up"
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, mission, values: WasteCure's own wording */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                Vision
              </h2>
              <p className="mt-4 text-2xl font-medium leading-snug text-foreground text-balance md:text-3xl">
                {VISION}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                Mission
              </h2>
              <p className="mt-4 text-2xl font-medium leading-snug text-foreground text-balance md:text-3xl">
                {MISSION}
              </p>
            </Reveal>
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              Core values
            </h2>
            <dl className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {CORE_VALUES.map((v) => (
                <div key={v.letter}>
                  <dt className="text-xl font-semibold text-foreground">
                    <span className="text-primary">{v.letter}</span>
                    {v.word.slice(1)}
                  </dt>
                  <dd className="mt-1 text-base text-muted-foreground">
                    {v.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-20 bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Leadership
          </h2>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06}>
                <li className="list-none">
                  <TeamAvatar name={member.name} image={member.image} />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Work with us"
        subtitle="Request a pickup, ask about a service, or talk to us about a partnership."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Get involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
