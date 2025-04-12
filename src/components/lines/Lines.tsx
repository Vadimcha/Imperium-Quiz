import { lines } from "./drawLines.ts";

export const Lines = () => {
  return <svg
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
    }}
  >
    {lines.map((line, idx) => {
      return (
        <path
          key={idx}
          d={line}
          stroke="white"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray="5,7"
        />
      );
    })}
  </svg>
}