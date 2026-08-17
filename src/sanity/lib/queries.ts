import { defineQuery } from "next-sanity";

export const CONTACT_PAGE_QUERY = defineQuery(`
  *[_id == "contactPage"][0]{
    title,
    intro{ headline, description },
    emailSection{ headline, description, email },
    formSection{ headline, description },
    seo{
      title,
      description,
      image,
      noIndex
    }
  }
`);

export const WORK_PAGE_QUERY = defineQuery(`
  *[_id == "workPage"][0]{
    title,
    intro{ headline, description },
    featuredProjects[]->{ _id, title, description, "href": link, "image": image.asset->url, tags },
    cta{ headline, description, link{ label, href } },
    seo{
      title,
      description,
      image,
      noIndex
    }
  }
`);

export const SERVICES_PAGE_QUERY = defineQuery(`
  *[_id == "servicesPage"][0]{
    title,
    intro{ headline, description, packagesLabel, cta{ label, href } },
    offer{ headline, description, items[]{ _key, title, description, icon } },
    packages{ headline, description, note, ctaLabel, items[]{ _key, name, price, blurb, features, featured } },
    faq{ headline, description, items[]{ _key, question, answer } },
    finalCta{ headline, description, link{ label, href } },
    seo{
      title,
      description,
      image,
      noIndex
    }
  }
`);

export const ABOUT_PAGE_QUERY = defineQuery(`
  *[_id == "aboutPage"][0]{
    title,
    story{
      headline,
      body
    },
    tech{
      headline,
      intro,
      items[]{ _key, name, category, description, url }
    },
    currentlyExploring{
      headline,
      intro,
      items[]{ _key, name, description, url }
    },
    currentlyPlaying{
      headline,
      intro,
      items[]{ _key, name, description, url }
    },
    cta{
      headline,
      intro,
      link{ label, href }
    },
    seo{
      title,
      description,
      image,
      noIndex
    }
  }
`);

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
      cta{ label, href },
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
    seo{
      title,
      description,
      image,
      noIndex
    }
  }
`);
