"use client";

import { useState } from "react";

function initials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TeamAvatar({ name, image }: { name: string; image?: string }) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
        {initials(name)}
      </div>
    );
  }

  return (
    <div className="size-16 overflow-hidden rounded-full ring-2 ring-primary/15">
      <img
        src={image}
        alt={name}
        className="size-full object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
