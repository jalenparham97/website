import {
  PortableText as SanityPortableTextBase,
  type PortableTextBlock,
  type PortableTextComponents,
  type PortableTextProps,
} from "next-sanity";

type SpanChild = {
  _type: string;
  text?: string;
  [key: string]: unknown;
};

function trimEdgeNewlines(blocks: PortableTextBlock[]): PortableTextBlock[] {
  return blocks.map((block) => {
    if (block._type !== "block" || !("children" in block) || !Array.isArray(block.children)) {
      return block;
    }

    const children = (block.children as SpanChild[]).map((child) => {
      if (child._type !== "span" || typeof child.text !== "string") {
        return child;
      }

      return {
        ...child,
        text: child.text.replace(/^\n+|\n+$/g, ""),
      };
    });

    return { ...block, children };
  });
}

function normalizeValue(value: PortableTextProps["value"]) {
  if (!value) return value;
  if (Array.isArray(value)) return trimEdgeNewlines(value as PortableTextBlock[]);
  if (typeof value === "object" && value !== null && "_type" in value) {
    return trimEdgeNewlines([value as PortableTextBlock])[0];
  }
  return value;
}

export function PortableText({
  value,
  components,
  ...props
}: PortableTextProps & { components?: PortableTextComponents }) {
  return (
    <SanityPortableTextBase {...props} value={normalizeValue(value)} components={components} />
  );
}
