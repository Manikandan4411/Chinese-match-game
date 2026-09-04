// src/hooks/useShuffle.js
import { useCallback } from "react";

function useShuffle() {
  // Fisher–Yates shuffle (non‑mutating)
  const shuffleArray = useCallback((array) => {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, []);

  return shuffleArray;
}

export default useShuffle;
