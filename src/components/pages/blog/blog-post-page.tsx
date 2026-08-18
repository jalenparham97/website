import Link from "next/link";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { BLOG_POST_QUERY_RESULT } from "@/sanity.types";
import { PortableText } from "@/sanity/lib/portable-text";
import type { SanityData } from "@/sanity/lib/types";

function formatDate(value: string | null | undefined) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function BlogPostPage({ data }: { data: SanityData<BLOG_POST_QUERY_RESULT> }) {
  return (
    <article className="mx-auto max-w-5xl py-14 sm:py-20 lg:py-24">
      <Link
        href="/blog"
        className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <HugeiconsIcon
          icon={ArrowLeft01Icon}
          size={18}
          strokeWidth={1.7}
          className="transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none"
        />
        All notes
      </Link>

      <header className="mt-14 max-w-3xl sm:mt-20">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          <span>By Jalen Parham</span>
          <span aria-hidden className="text-border">
            /
          </span>
          <time dateTime={data.publishedAt ?? undefined}>{formatDate(data.publishedAt)}</time>
          {data.tags?.map((tag) => (
            <span key={tag} className="text-foreground/70">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-7 text-balance text-[clamp(2.75rem,7vw,5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground">
          {data.title}
        </h1>
        <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground sm:text-2xl sm:leading-9">
          {data.excerpt}
        </p>
      </header>

      <div className="mt-14 border-t border-border pt-10 sm:mt-20 sm:pt-12">
        <div className="typeset typeset-story max-w-[38em]">
          <PortableText value={data.body} />
        </div>
      </div>
    </article>
  );
}
