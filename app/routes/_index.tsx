import type { Route } from "./+types/_index";
import { getSubdomain } from "~/lib/subdomain";
import ElSembrador from "~/screens/ElSembrador";
import Bethesda from "~/screens/Bethesda";
import NotFound from "~/screens/NotFound";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Tamperu — Iglesias" }];
}

export async function loader({ request }: Route.LoaderArgs) {
  const subdomain = getSubdomain(request);
  return { subdomain };
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const { subdomain } = loaderData;

  if (subdomain === "elsembrador") return <ElSembrador />;
  if (subdomain === "bethesda") return <Bethesda />;
  return <NotFound subdomain={subdomain} />;
}
