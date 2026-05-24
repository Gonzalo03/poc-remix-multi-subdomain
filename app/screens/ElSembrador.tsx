export default function ElSembrador() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", background: "#fafaf5", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          background: "#fff",
          border: "2px solid #a3b18a",
          borderRadius: 16,
          padding: "2.5rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "2rem" }}>🌾</span>
          <h1 style={{ color: "#3a5a40", margin: 0, fontSize: "1.8rem" }}>Iglesia El Sembrador</h1>
        </div>
        <p style={{ color: "#555", lineHeight: 1.7, marginTop: 0 }}>
          Bienvenido a <strong>El Sembrador</strong>. Somos una comunidad de fe comprometida con
          sembrar la Palabra de Dios en cada corazón y familia de Tamperu.
        </p>

        <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
          <div style={{ background: "#f0f4ec", borderRadius: 10, padding: "1rem 1.25rem" }}>
            <h3 style={{ margin: "0 0 0.25rem", color: "#3a5a40" }}>Próximo culto</h3>
            <p style={{ margin: 0, color: "#666" }}>Domingo 10:00 am — Auditorio principal</p>
          </div>
          <div style={{ background: "#f0f4ec", borderRadius: 10, padding: "1rem 1.25rem" }}>
            <h3 style={{ margin: "0 0 0.25rem", color: "#3a5a40" }}>Grupos de vida</h3>
            <p style={{ margin: 0, color: "#666" }}>Miércoles 7:00 pm — Distintos sectores de la ciudad</p>
          </div>
          <div style={{ background: "#f0f4ec", borderRadius: 10, padding: "1rem 1.25rem" }}>
            <h3 style={{ margin: "0 0 0.25rem", color: "#3a5a40" }}>Escuela bíblica</h3>
            <p style={{ margin: 0, color: "#666" }}>Sábados 9:00 am — Sala de formación</p>
          </div>
        </div>

        <p style={{ marginTop: "1.5rem", color: "#888", fontSize: "0.85rem" }}>
          elsembrador.tamiperu.com
        </p>
      </div>
    </main>
  );
}
