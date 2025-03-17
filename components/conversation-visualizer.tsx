"use client";

import { useEffect, useState } from "react";
import {
  useConversation,
  conversationFlow,
} from "@/context/conversation-context";

type Suggestion = {
  text: string;
  nextStep: number;
};

type RedDot = {
  row: number;
  index: number;
  suggestion: Suggestion;
};

type HoveredDot = {
  row: number;
  index: number;
  left: number;
  top: number;
  suggestion: Suggestion;
};

export default function ConversationVisualizer() {
  const dotPattern = [30, 28, 26, 24, 22, 20, 5, 1];

  const [activeRows, setActiveRows] = useState<number[]>([]);
  const [redDots, setRedDots] = useState<RedDot[]>([]);
  const [hoveredDot, setHoveredDot] = useState<HoveredDot | null>(null);
  const [animationFinished, setAnimationFinished] = useState(false);

  const { currentStep, handleUserResponse } = useConversation();
  const suggestions = conversationFlow[currentStep]?.suggestions || [];

  useEffect(() => {
    setActiveRows([0, 1]);

    if (typeof window !== "undefined") {
      const newRedDots: RedDot[] = suggestions.map((sug) => ({
        row: Math.floor(Math.random() * dotPattern.length),
        index: Math.floor(Math.random() * 30),
        suggestion: sug,
      }));
      setRedDots(newRedDots);
    }

    const interval = setInterval(() => {
      setActiveRows((prev) => {
        const newRows = prev
          .map((row) => row + 1)
          .filter((row) => row < dotPattern.length);

        if (newRows.length === 0) {
          clearInterval(interval);
          setAnimationFinished(true);
        }
        return newRows;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentStep, suggestions.length]);

  return (
    <div className="mt-6 relative">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        {animationFinished ? (
          <>
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
              className="h-5 w-5 text-[#19C700]"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            Calculating possible conversation paths - 2 suggestions found
          </>
        ) : (
          <>
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
          </>
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <div className="relative w-full h-32">
          {dotPattern.map((dotsInRow, row) =>
            Array.from({ length: dotsInRow }).map((_, index) => {
              const isActive = activeRows.includes(row);

              const matchingRedDot = redDots.find(
                (dot) => dot.row === row && dot.index === index
              );
              const isRed = Boolean(matchingRedDot);

              const dotLeft = 50 - dotsInRow * 1.7 + index * 3.4;
              const dotTop = row * 14;

              return (
                <div
                  key={`${row}-${index}`}
                  className="absolute rounded-full shadow-lg transition-all duration-500 cursor-pointer"
                  style={{
                    width: "12px",
                    height: "12px",
                    left: `${dotLeft}%`,
                    top: `${dotTop}px`,
                    background: isRed
                      ? "radial-gradient(circle, #ff7070, #b30000)"
                      : isActive
                      ? "radial-gradient(circle, #4da6ff, #0056b3)"
                      : "#e0e0e0",
                  }}
                  onMouseEnter={() => {
                    if (matchingRedDot) {
                      setHoveredDot({
                        row,
                        index,
                        left: dotLeft,
                        top: dotTop,
                        suggestion: matchingRedDot.suggestion,
                      });
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredDot(null);
                  }}
                />
              );
            })
          )}

          {hoveredDot && (
            <div
              className="absolute p-3 bg-white rounded-xl border border-[#EAE7DC] shadow-md text-black max-w-xs"
              style={{
                left: `${hoveredDot.left}%`,
                top: `${hoveredDot.top}px`,
                transform: "translate(-50%, -110%)",
              }}
            >
              <div
                className="absolute w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#EAE7DC]"
                style={{
                  bottom: "-6px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></div>
              <div className="flex items-center justify-between mb-2">
                <div className="px-2 py-1 text-[#19C700] bg-[#F4FEED] border border-[#8DE08E] rounded-md text-[14px] font-semibold">
                  +15%
                </div>
                <span className="text-gray-600 text-[14px] ml-2">
                  Clarifies position
                </span>
              </div>
              <p className="text-gray-700 text-[14px] mb-2">
                {hoveredDot.suggestion.text}
              </p>
              <button
                onClick={() =>
                  handleUserResponse(
                    hoveredDot.suggestion.text,
                    hoveredDot.suggestion.nextStep
                  )
                }
                className="bg-gradient-to-r from-[#1977F2] to-[#D22163] bg-clip-text text-transparent hover:underline text-[14px] font-medium"
              >
                Use suggestion
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
