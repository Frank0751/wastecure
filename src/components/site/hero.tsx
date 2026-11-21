import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/site/photo";
import { PHOTOS } from "@/lib/photos";
import { SITE } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden md:min-h-[calc(100svh-5rem)]">
      <Photo
        id={PHOTOS.cleaningCrew}
        alt="Six WasteCure crew members in orange vests, holding brooms, at a market site"
        sizes="100vw"
        priority
        focus="50% 35%"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      {/* Even overlay: the text is centred, so it sits over the photo itself. */}
      <div className="absolute inset-0 -z-10 bg-forest-900/70" />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-leaf-400">
          Kumasi, Ghana · Since {SITE.founded}
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
          Waste Management Specialists
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
          WasteCure is reducing waste pollution across Ghana by providing
          advanced waste solutions for sustainable waste management, building
          a cleaner, greener environment one community at a time.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">
              Request a service
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/services">See what we do</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
