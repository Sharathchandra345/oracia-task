"use client";
import { useEffect, useState } from "react";

export default function ConversationVisualizer() {
  const dotPattern = [30, 28, 26, 24, 22, 20, 5, 1];
  const [activeRows, setActiveRows] = useState<number[]>([0, 1]);
  const [redDots, setRedDots] = useState<{ row: number; index: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRows((prev) => {
        const newRows = prev
          .map((row) => row + 1)
          .filter((row) => row < dotPattern.length);
        return newRows.length > 0 ? newRows : [0, 1];
      });
      setRedDots(() => [
        {
          row: Math.floor(Math.random() * dotPattern.length),
          index: Math.floor(Math.random() * 30),
        },
        {
          row: Math.floor(Math.random() * dotPattern.length),
          index: Math.floor(Math.random() * 30),
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
        Calculating possible conversation paths
        <div className="animate-spin border-t-2 border-[#DC379F] border-solid h-4 w-4 rounded-full"></div>
      </div>
      <div className="mt-6 flex justify-center">
        <div className="relative w-full h-32">
          {dotPattern.map((dotsInRow, row) =>
            Array.from({ length: dotsInRow }).map((_, index) => {
              const isActive = activeRows.includes(row);
              const isRed = redDots.some(
                (dot) => dot.row === row && dot.index === index
              );

              return (
                <div
                  key={`${row}-${index}`}
                  className="absolute rounded-full shadow-lg transition-all duration-500"
                  style={{
                    width: "12px",
                    height: "12px",
                    left: `${50 - dotsInRow * 1.7 + index * 3.4}%`,
                    top: `${row * 14}px`,
                    background: isRed
                      ? "radial-gradient(circle, #ff7070, #b30000)"
                      : isActive
                      ? "radial-gradient(circle, #4da6ff, #0056b3)"
                      : "#e0e0e0",
                    opacity: 1,
                  }}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
