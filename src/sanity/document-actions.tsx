import { ViewIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { DocumentActionComponent, DocumentActionProps } from "sanity";

const routes: Record<string, string> = {
  homePage: "/",
  aboutPage: "/about",
  contactPage: "/contact",
  servicesPage: "/services",
  workPage: "/work",
  project: "/work",
};

function actionIcon(icon: typeof ViewIcon) {
  return function ActionIcon() {
    return <HugeiconsIcon icon={icon} size={18} strokeWidth={1.7} />;
  };
}

const PreviewDocumentAction: DocumentActionComponent = ({ id, type }: DocumentActionProps) => {
  const route = routes[type];

  if (!route) {
    return null;
  }

  return {
    label: "Preview",
    icon: actionIcon(ViewIcon),
    onHandle: () => {
      const documentId = id.replace(/^drafts\./, "");
      const presentationUrl = new URL(
        `/studio/presentation/${type}/${documentId}`,
        window.location.origin,
      );
      presentationUrl.searchParams.set("preview", route);
      window.open(presentationUrl.toString(), "_blank", "noopener,noreferrer");
    },
  };
};

export const documentActions = (previousActions: DocumentActionComponent[]) => {
  const publishAction = previousActions.find((action) => action.action === "publish");
  const otherActions = previousActions.filter((action) => action !== publishAction);

  return [...(publishAction ? [publishAction] : []), PreviewDocumentAction, ...otherActions];
};
