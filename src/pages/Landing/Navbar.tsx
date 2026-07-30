import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        width: "100%",
        padding: "22px 70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        background: "rgba(5,8,22,0.75)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          color: "#ffffff",
          fontWeight: 800,
          fontSize: "1.35rem",
          margin: 0,
          letterSpacing: "1px",
        }}
      >
        AIR
      </h2>

      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
        }}
      >
        {["Home", "Air Canvas", "Air Flow", "Magic Desk", "Dashboard"].map(
          (item) => (
            <a
              key={item}
              href="#"
              style={{
                color: "#d8dff8",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {item}
            </a>
          )
        )}

        <button
          style={{
            padding: "12px 24px",
            borderRadius: "10px",
            border: "none",
            background: "#6C63FF",
            color: "#fff",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Launch
        </button>
      </div>
    </nav>
  );
};

export default Navbar;