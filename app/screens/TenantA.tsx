export default function TenantA() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          background: "#eff6ff",
          border: "2px solid #3b82f6",
          borderRadius: 12,
          padding: "2rem",
        }}
      >
        <h1 style={{ color: "#1d4ed8", marginTop: 0 }}>Tenant A</h1>
        <p style={{ color: "#374151" }}>
          Welcome to <strong>Tenant A</strong>'s experience. This screen is
          rendered because the subdomain <code>tenant-a</code> was detected.
        </p>
        <ul style={{ color: "#6b7280" }}>
          <li>Custom branding for Tenant A</li>
          <li>Tenant-specific features</li>
          <li>Isolated data scope</li>
        </ul>
      </div>
    </main>
  );
}
