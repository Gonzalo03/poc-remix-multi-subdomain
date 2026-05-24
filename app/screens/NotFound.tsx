export default function NotFound({ subdomain }: { subdomain: string | null }) {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          background: "#fef2f2",
          border: "2px solid #ef4444",
          borderRadius: 12,
          padding: "2rem",
        }}
      >
        <h1 style={{ color: "#b91c1c", marginTop: 0 }}>Unknown tenant</h1>
        <p style={{ color: "#374151" }}>
          {subdomain
            ? `No tenant configured for subdomain "${subdomain}".`
            : "No subdomain detected. Access this app via a subdomain (e.g. tenant-a.myapp.com)."}
        </p>
      </div>
    </main>
  );
}
