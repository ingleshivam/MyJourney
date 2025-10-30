import React from "react";

export default function LoadingScreen() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        color: "white",
        fontFamily: "sans-serif",
        fontSize: "1.5rem",
      }}
    >
      <div className="animate-pulse">Loading The Divine Odyssey...</div>
    </div>
  );
}
