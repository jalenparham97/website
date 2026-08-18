import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
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
  const [featuredPost, ...archivePosts] = posts;

  return (
    <div className="mx-auto max-w-5xl py-14 sm:py-20 lg:py-24">
      <header className="max-w-3xl">
        <h1 className="max-w-3xl text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground sm:text-5xl sm:leading-[1.06] sm:tracking-[-0.04em] lg:text-[3.75rem] lg:leading-[1.05]">
          {data.page?.intro?.headline || "Notes on making the web clearer."}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
          {data.page?.intro?.description ||
            "Thoughts on design, development, and the choices that make a website feel easy to use."}
        </p>
      </header>

      {featuredPost ? (
        <section aria-labelledby="latest-article" className="mt-14 sm:mt-20">
          <h2 id="latest-article" className="sr-only">
            Latest article
          </h2>
          <Link
            href={`/blog/${featuredPost.slug?.current}`}
            className="group block border-y border-border py-8 transition-colors hover:border-foreground/30 sm:py-10"
          >
            <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_12rem] sm:gap-12">
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
                  <span>Latest note</span>
                  <span aria-hidden className="text-border">
                    /
                  </span>
                  <time dateTime={featuredPost.publishedAt ?? undefined}>
                    {formatDate(featuredPost.publishedAt)}
                  </time>
                </div>
                <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] text-foreground transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none sm:text-[2.75rem] sm:leading-[1.05]">
                  {featuredPost.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {featuredPost.excerpt}
                </p>
              </div>
              <div className="flex items-end justify-between gap-4 border-t border-border/70 pt-4 sm:flex-col sm:items-end sm:justify-between sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
                <div className="flex flex-wrap gap-2 sm:justify-end">
                  {featuredPost.tags?.map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  Read note
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={18}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none"
                  />
                </span>
              </div>
            </div>
          </Link>
        </section>
      ) : null}

      {archivePosts.length ? (
        <section aria-labelledby="archive" className="mt-16 sm:mt-20">
          <div className="flex items-end justify-between gap-6 border-b border-border pb-4">
            <h2 id="archive" className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
              More notes
            </h2>
            <span className="text-sm text-muted-foreground">{archivePosts.length} articles</span>
          </div>
          <div>
            {archivePosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug?.current}`}
                className="group grid gap-3 border-b border-border py-6 transition-colors hover:border-foreground/30 sm:grid-cols-[10rem_minmax(0,1fr)_auto] sm:items-start sm:gap-8 sm:py-8"
              >
                <time
                  dateTime={post.publishedAt ?? undefined}
                  className="text-sm text-muted-foreground"
                >
                  {formatDate(post.publishedAt)}
                </time>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-foreground transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none sm:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-7 text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={19}
                  strokeWidth={1.7}
                  className="hidden text-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none sm:mt-1 sm:block"
                />
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
