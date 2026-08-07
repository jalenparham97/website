import { NextStudioLayout } from "next-sanity/studio";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioLayout({ children }: LayoutProps<"/studio/[[...tool]]">) {
  return <NextStudioLayout>{children}</NextStudioLayout>;
}
