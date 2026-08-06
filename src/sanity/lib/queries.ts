import { defineQuery } from "next-sanity";

export const HOME_PAGE_QUERY = defineQuery(`
  *[_id == "homePage"][0]{
    title,
    hero{
      headline,
      intro,
      primaryCta{ label, href },
      secondaryCta{ label, href }
    },
    about{
      headline,
      body,
      cta{ label, href },
      principles[]{
        _key,
        title,
        summary,
        description
      }
    },
    services{
      headline,
      intro,
      items[]{
        _key,
        title,
        summary,
        detail,
        tags
      }
    },
    portfolio{
      headline,
      intro,
      cta{ label, href },
      featuredProjects[]->{
        _id,
        title,
        description,
        "href": link,
        "image": image.asset->url,
        tags
      }
    },
    contact{
      headline,
      intro,
      email
    },
    "seo": {
      "title": coalesce(seo.title, "Jalen Parham | Independent web designer & developer"),
      "description": coalesce(
        seo.description,
        "Jalen Parham helps small businesses turn good ideas into clear, capable websites."
      ),
      image,
      "noIndex": seo.noIndex == true
    }
  }
`);
