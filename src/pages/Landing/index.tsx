const LandingPage = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          marginBottom: "1rem",
          fontWeight: "800",
        }}
      >
        AI Powered Gesture Interaction
      </h1>

      <p
        style={{
          fontSize: "1.3rem",
          maxWidth: "700px",
          color: "#B6C2E1",
          lineHeight: "1.8",
        }}
      >
        Control your computer using hand gestures. Draw in air, automate
        workflows, launch applications, and interact with AI using only your
        hands.
      </p>

      <button
        style={{
          marginTop: "2rem",
          padding: "14px 32px",
          fontSize: "1rem",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          background: "#6C63FF",
          color: "white",
          fontWeight: "600",
        }}
      >
        Get Started
      </button>
    </main>
  );
};

export default LandingPage;