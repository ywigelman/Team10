import React from "react";
import { Card } from "react-bootstrap";

export default function FlippingCard({ children, otherSide, flip = false }) {
  const [flipped, setFlipped] = React.useState(flip);

  React.useEffect(() => {
    setFlipped(flip);
  }, [flip]);

  return (
    <div
      className="m-3"
      onClick={() => setFlipped(!flipped)}
      style={{ position: "relative", cursor: "pointer" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          transition: "transform 0.8s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d",
          "-webkit-transform-style": "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </div>
      <Card
        style={{
          fontSize: "6rem",
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          transition: "transform 0.8s",
          transform: flipped ? "rotateY(0deg)" : "rotateY(-180deg)",
          transformStyle: "preserve-3d",
          "-webkit-transform-style": "preserve-3d",
          backfaceVisibility: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {otherSide}
      </Card>
      <div style={{ opacity: "0" }}>
        <div style={{ opacity: "0" }}>{children}</div>
      </div>
    </div>
  );
}
