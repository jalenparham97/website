import {
  Briefcase01Icon,
  Folder01Icon,
  Home01Icon,
  Mail01Icon,
  UserCircleIcon,
  WebDesign01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ComponentType } from "react";
import type { StructureResolver } from "sanity/structure";

const SINGLETONS = ["aboutPage", "contactPage", "homePage", "servicesPage", "workPage"];

function studioIcon(icon: typeof Home01Icon): ComponentType {
  function Icon() {
    return <HugeiconsIcon icon={icon} size={18} strokeWidth={1.7} />;
  }

  Icon.displayName = "StudioIcon";
  return Icon;
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .icon(studioIcon(Home01Icon))
        .child(S.document().schemaType("homePage").documentId("homePage").title("Home Page")),
      S.listItem()
        .title("About Page")
        .icon(studioIcon(UserCircleIcon))
        .child(S.document().schemaType("aboutPage").documentId("aboutPage").title("About Page")),
      S.listItem()
        .title("Contact Page")
        .icon(studioIcon(Mail01Icon))
        .child(
          S.document().schemaType("contactPage").documentId("contactPage").title("Contact Page"),
        ),
      S.listItem()
        .title("Services Page")
        .icon(studioIcon(WebDesign01Icon))
        .child(
          S.document().schemaType("servicesPage").documentId("servicesPage").title("Services Page"),
        ),
      S.listItem()
        .title("Work Page")
        .icon(studioIcon(Briefcase01Icon))
        .child(S.document().schemaType("workPage").documentId("workPage").title("Work Page")),
      S.divider(),
      ...S.documentTypeListItems()
        .filter((listItem) => !SINGLETONS.includes(listItem.getId() ?? ""))
        .map((listItem) =>
          listItem.getId() === "project"
            ? listItem.title("Projects").icon(studioIcon(Folder01Icon))
            : listItem,
        ),
    ]);
