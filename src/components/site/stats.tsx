import { STATS } from "@/lib/site-data";

/** WasteCure's own figures, set plainly. */
export function Stats() {
  return (
    <dl className="grid grid-cols-2 divide-border border-y border-border lg:grid-cols-4 lg:divide-x">
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={`px-2 py-8 sm:px-6 md:py-10 ${i % 2 === 1 ? "border-l border-border lg:border-l-0" : ""} ${i >= 2 ? "border-t border-border lg:border-t-0" : ""}`}
        >
          <dd className="text-4xl font-bold tracking-tight text-foreground tabular-nums md:text-5xl">
            {stat.value}
          </dd>
          <dt className="mt-2 text-sm text-muted-foreground">{stat.label}</dt>
        </div>
      ))}
    </dl>
  );
}
