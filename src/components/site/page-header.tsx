import { Photo } from "@/components/site/photo";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  /** Cloudinary photo id from PHOTOS. */
  photo: string;
  /** CSS object-position, to keep faces in frame on wide crops. */
  focus?: string;
};

/** Full-height, centred header at the top of every inner page. */
export function PageHeader({ title, subtitle, photo, focus = "50% 35%" }: PageHeaderProps) {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden md:min-h-[calc(100svh-5rem)]">
      <Photo
        id={photo}
        alt=""
        sizes="100vw"
        priority
        focus={focus}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-forest-900/70" />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
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
