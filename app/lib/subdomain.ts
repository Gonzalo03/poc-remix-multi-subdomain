/**
 * Extracts the subdomain from a hostname.
 *
 * Examples:
 *   tenant-a.myapp.com  → "tenant-a"
 *   tenant-b.myapp.com  → "tenant-b"
 *   myapp.com           → null  (no subdomain)
 *   localhost           → null
 */
export function getSubdomain(request: Request): string | null {
  const host = request.headers.get("host") ?? "";

  // Strip port (e.g. localhost:5173)
  const hostname = host.split(":")[0];

  // Split by dots; a subdomain exists when there are 3+ parts (sub.domain.tld)
  // For localhost-based testing we check the SUBDOMAIN env var as a fallback
  const parts = hostname.split(".");
  if (parts.length >= 3) {
    return parts[0];
  }

  // Dev convenience: set SUBDOMAIN=tenant-a in your shell to simulate
  if (process.env.SUBDOMAIN) {
    return process.env.SUBDOMAIN;
  }

  return null;
}
