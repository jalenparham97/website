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
    <article className="mx-auto max-w-5xl py-10 sm:py-20 lg:py-24">
      <Link
        href="/blog"
        className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <HugeiconsIcon
          icon={ArrowLeft01Icon}
          size={18}
          strokeWidth={1.7}
          className="transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none"
        />
        All posts
      </Link>

      <header className="mt-6 max-w-3xl sm:mt-12">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          <span>By Jalen Parham</span>
          <span aria-hidden className="text-border">
            /
          </span>
          <time dateTime={data.publishedAt ?? undefined}>{formatDate(data.publishedAt)}</time>
        </div>
        <h1 className="mt-6 max-w-2xl text-balance text-[clamp(2.25rem,10vw,4rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-foreground sm:mt-7 sm:leading-[1.02]">
          {data.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-7 text-muted-foreground sm:mt-7 sm:text-2xl sm:leading-9">
          {data.excerpt}
        </p>
      </header>

      <div className="mt-10 border-t border-border pt-8 sm:mt-16 sm:pt-12">
        <div className="typeset typeset-article max-w-[38em]">
          <PortableText value={data.body} />
        </div>
      </div>
    </article>
  );
}
