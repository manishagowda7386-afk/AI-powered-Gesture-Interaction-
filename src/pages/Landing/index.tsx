export default function LandingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg,#0b1020 0%,#111827 45%,#1e293b 100%)",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#7dd3fc",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          AI Powered Computer Vision
        </p>

        <h1
          style={{
            fontSize: "64px",
            margin: "20px 0",
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          Control Your Computer
          <br />
          With Hand Gestures
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "20px",
            lineHeight: 1.8,
          }}
        >
          A futuristic AI platform that recognizes your hand gestures in
          real-time and transforms them into powerful desktop actions.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <button
            style={{
              padding: "15px 35px",
              borderRadius: "12px",
              border: "none",
              background: "#2563eb",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Launch Demo
          </button>

          <button
            style={{
              padding: "15px 35px",
              borderRadius: "12px",
              background: "transparent",
              border: "2px solid #38bdf8",
              color: "#38bdf8",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}