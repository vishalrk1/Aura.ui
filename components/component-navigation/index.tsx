"use client";

import type { ComponentArticle } from "@/types/component";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

interface ComponentNavigationProps {
  components: Array<ComponentArticle>;
}

function ComponentNavigation({ components }: ComponentNavigationProps) {
  // Sort components in descending order based on creation time.
  components.sort((a, b) => {
    return (
      new Date(b.time.created).getTime() - new Date(a.time.created).getTime()
    );
  });

  const currentSlug = usePathname().split("/").pop();
  const currentIndex = components.findIndex(
    (component) => component.slug === currentSlug,
  );

  const previous = currentIndex > 0 ? components[currentIndex - 1] : null;
  const next =
    currentIndex < components.length - 1 ? components[currentIndex + 1] : null;

  if (!previous && !next) {
    return null;
  }

  return (
    <div className="mt-16 flex w-full justify-between border-border border-t pt-8">
      {previous && (
        <Link
          href={`${previous.slug}`}
          className="flex w-full flex-col gap-1 text-left"
        >
          <span className="text-muted">Previous</span>
          <span>{previous.title}</span>
        </Link>
      )}
      {next && (
        <Link
          href={`${next.slug}`}
          className="flex w-full flex-col gap-1 text-right"
        >
          <span className="text-muted">Next</span>
          <span>{next.title}</span>
        </Link>
      )}
    </div>
  );
}

export { ComponentNavigation };
