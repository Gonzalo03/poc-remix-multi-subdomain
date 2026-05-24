export default function Bethesda() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", background: "#f5f7ff", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          background: "#fff",
          border: "2px solid #6b8cba",
          borderRadius: 16,
          padding: "2.5rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "2rem" }}>🕊️</span>
          <h1 style={{ color: "#1e3a6e", margin: 0, fontSize: "1.8rem" }}>Iglesia Bethesda</h1>
        </div>
        <p style={{ color: "#555", lineHeight: 1.7, marginTop: 0 }}>
          Bienvenido a <strong>Bethesda</strong>. Un lugar de restauración y encuentro con Dios,
          donde cada persona es recibida con amor y propósito.
        </p>

        <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
          <div style={{ background: "#edf1f9", borderRadius: 10, padding: "1rem 1.25rem" }}>
            <h3 style={{ margin: "0 0 0.25rem", color: "#1e3a6e" }}>Servicio dominical</h3>
            <p style={{ margin: 0, color: "#666" }}>Domingo 9:00 am y 11:30 am — Templo central</p>
          </div>
          <div style={{ background: "#edf1f9", borderRadius: 10, padding: "1rem 1.25rem" }}>
            <h3 style={{ margin: "0 0 0.25rem", color: "#1e3a6e" }}>Reunión de oración</h3>
            <p style={{ margin: 0, color: "#666" }}>Martes y Jueves 6:30 pm — Sala de intercesión</p>
          </div>
          <div style={{ background: "#edf1f9", borderRadius: 10, padding: "1rem 1.25rem" }}>
            <h3 style={{ margin: "0 0 0.25rem", color: "#1e3a6e" }}>Jóvenes Bethesda</h3>
            <p style={{ margin: 0, color: "#666" }}>Viernes 7:00 pm — Salón juvenil</p>
          </div>
        </div>

        <p style={{ marginTop: "1.5rem", color: "#888", fontSize: "0.85rem" }}>
          bethesda.tamperu.com
        </p>
      </div>
    </main>
  );
}
