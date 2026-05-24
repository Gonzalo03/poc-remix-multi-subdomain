import type { Route } from "./+types/_index";
import { getSubdomain } from "~/lib/subdomain";
import TenantA from "~/screens/TenantA";
import TenantB from "~/screens/TenantB";
import NotFound from "~/screens/NotFound";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Multi-tenant app" }];
}

export async function loader({ request }: Route.LoaderArgs) {
  const subdomain = getSubdomain(request);
  return { subdomain };
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const { subdomain } = loaderData;

  if (subdomain === "tenant-a") return <TenantA />;
  if (subdomain === "tenant-b") return <TenantB />;
  return <NotFound subdomain={subdomain} />;
}
