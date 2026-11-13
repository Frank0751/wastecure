import { Photo } from "@/components/site/photo";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  /** Cloudinary photo id from PHOTOS. */
  photo: string;
  /** CSS object-position, to keep faces in frame on wide crops. */
  focus?: string;
};

/** Header band at the top of every inner page. */
export function PageHeader({ title, subtitle, photo, focus = "50% 35%" }: PageHeaderProps) {
  return (
    <section className="relative isolate flex min-h-[46svh] items-end overflow-hidden md:min-h-[52svh]">
      <Photo
        id={photo}
        alt=""
        sizes="100vw"
        priority
        focus={focus}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-900 via-forest-900/75 to-forest-900/30" />
      <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 md:pb-14 lg:px-8">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
