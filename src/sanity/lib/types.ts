import type { StegaBranded } from "next-sanity";

/** Accept both clean TypeGen results and stega-branded sanityFetch results. */
export type SanityData<T> = NonNullable<T> | StegaBranded<NonNullable<T>>;
