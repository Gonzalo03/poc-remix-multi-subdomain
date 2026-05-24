export default function NotFound({ subdomain }: { subdomain: string | null }) {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", background: "#fafafa", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          background: "#fff",
          border: "2px solid #e5e7eb",
          borderRadius: 16,
          padding: "2.5rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
        }}
      >
        <h1 style={{ color: "#374151", marginTop: 0 }}>Iglesia no encontrada</h1>
        <p style={{ color: "#6b7280" }}>
          {subdomain
            ? `No hay ninguna iglesia configurada para "${subdomain}.tamperu.com".`
            : "Accedé a través de un subdominio válido: elsembrador.tamperu.com o bethesda.tamperu.com"}
        </p>
      </div>
    </main>
  );
}
