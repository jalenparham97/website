import Link from "next/link";
import { ArrowUpRight01Icon, BookOpen01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { BLOG_PAGE_QUERY_RESULT } from "@/sanity.types";
import type { SanityData } from "@/sanity/lib/types";

function formatDate(value: string | null | undefined) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function BlogPage({ data }: { data: SanityData<BLOG_PAGE_QUERY_RESULT> }) {
  const posts = data.posts ?? [];

  return (
    <div className="mx-auto w-full max-w-5xl py-14 sm:py-20 lg:py-24">
      <header className="max-w-3xl">
        <h1 className="max-w-3xl text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground sm:text-5xl sm:leading-[1.06] sm:tracking-[-0.04em] lg:text-[3.75rem] lg:leading-[1.05]">
          {data.page?.intro?.headline || "A few things worth sharing."}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
          {data.page?.intro?.description ||
            "Occasional notes on design, development, and everything in between."}
        </p>
      </header>

      {posts.length ? (
        <section aria-labelledby="writing" className="mt-10 sm:mt-12">
          <h2 id="writing" className="sr-only">
            Writing
          </h2>
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug?.current}`}
                className="group flex h-full flex-col border border-border bg-card p-5 text-left transition-[border-color] duration-300 ease-out hover:border-foreground/25 motion-reduce:transition-none sm:p-6"
              >
                <time
                  dateTime={post.publishedAt ?? undefined}
                  className="text-sm text-muted-foreground"
                >
                  {formatDate(post.publishedAt)}
                </time>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-7 text-muted-foreground sm:text-base sm:leading-7">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm text-muted-foreground">By Jalen Parham</span>
                  <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground">
                    Read
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={16}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <section
          aria-labelledby="empty-writing"
          className="mt-10 max-w-3xl border border-border bg-card p-6 sm:mt-12 sm:p-8"
        >
          <HugeiconsIcon
            icon={BookOpen01Icon}
            size={22}
            strokeWidth={1.5}
            className="text-foreground"
            aria-hidden="true"
          />
          <h2 id="empty-writing" className="mt-5 text-xl font-semibold text-foreground sm:text-2xl">
            Writing is on the way.
          </h2>
          <p className="mt-2 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Nothing published yet. The first piece will show up here when it is ready.
          </p>
        </section>
      )}
    </div>
  );
}
