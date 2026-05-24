export default function TenantB() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          background: "#f0fdf4",
          border: "2px solid #22c55e",
          borderRadius: 12,
          padding: "2rem",
        }}
      >
        <h1 style={{ color: "#15803d", marginTop: 0 }}>Tenant B</h1>
        <p style={{ color: "#374151" }}>
          Welcome to <strong>Tenant B</strong>'s experience. This screen is
          rendered because the subdomain <code>tenant-b</code> was detected.
        </p>
        <ul style={{ color: "#6b7280" }}>
          <li>Custom branding for Tenant B</li>
          <li>Tenant-specific features</li>
          <li>Isolated data scope</li>
        </ul>
      </div>
    </main>
  );
}
