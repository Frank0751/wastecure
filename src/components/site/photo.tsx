import { photoSrcSet, photoUrl } from "@/lib/photos";

type PhotoProps = {
  id: string;
  alt: string;
  /** How wide the image is laid out, e.g. "(min-width: 1024px) 50vw, 100vw". */
  sizes: string;
  className?: string;
  /** Set for the one image that is visible on first paint. */
  priority?: boolean;
  /** CSS object-position, to keep the subject in frame when cropped. */
  focus?: string;
};

/**
 * Responsive photo. The browser picks the smallest Cloudinary rendition that
 * covers the layout width, instead of downloading the 4000px original.
 */
export function Photo({ id, alt, sizes, className, priority, focus }: PhotoProps) {
  return (
    <img
      src={photoUrl(id, 1080)}
      srcSet={photoSrcSet(id)}
      sizes={sizes}
      alt={alt}
      className={className}
      style={focus ? { objectPosition: focus } : undefined}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
