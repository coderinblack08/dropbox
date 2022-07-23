import { useEffect, useState } from "react";

export const useDimensions = <T extends HTMLElement = HTMLDivElement>() => {
  const [boxRef, setBoxRef] = useState<T | null>(null);
  const [dimensions, setDimensions] = useState({
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (boxRef) {
        const { x, width, y, height } = boxRef.getBoundingClientRect();
        setDimensions({ x, width, y, height });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions, true);
    return () => {
      window.removeEventListener("resize", updateDimensions, true);
    };
  }, [boxRef]);

  return { boxRef, setBoxRef, dimensions };
};
