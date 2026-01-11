import { useEffect, useState } from "react";

function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-0"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        width: "800px",
        height: "800px",
        background: "radial-gradient(circle, rgba(100, 255, 218, 0.06) 0%, rgba(100, 255, 218, 0.03) 30%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        transition: "opacity 0.3s ease",
      }}
    />
  );
}

export default CursorGlow;

