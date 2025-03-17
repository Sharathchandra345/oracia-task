"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function SuggestionPanel() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="text-xl">✨</span>
        Best follow-up suggestions
      </div>

      <div className="mt-2 space-y-4">
        {[1, 2].map((item) => (
          <Card
            key={item}
            className="p-4 bg-none shadow-md border-2 border-[#1977F2] rounded-xl"
          >
            {loading ? (
              <motion.div
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                  <div className="flex gap-1">
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-4 h-2 w-full bg-gray-200 rounded"></div>
                <div className="mt-2 h-2 w-2/3 bg-gray-200 rounded"></div>
                <div className="mt-4 h-2 w-1/3 bg-gray-200 rounded"></div>
              </motion.div>
            ) : (
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 text-[#19C700] bg-[#F4FEED] border border-[#8DE08E] rounded-md text-[14px] font-semibold">
                      +15%
                    </div>
                    <span className="text-[#484848] text-[14px]">
                      Clarifies position
                    </span>
                  </div>

                  <a
                    href="#"
                    className="bg-gradient-to-r from-[#1977F2] to-[#D22163] bg-clip-text text-transparent hover:underline text-[14px] font-medium"
                  >
                    Preview next messages
                  </a>
                </div>
                <div
                  className="mt-2 border-t border-[#D7D7D7]"
                  style={{ borderWidth: "0.5px" }}
                ></div>
                <p className="mt-4 text-[#484848] text-[15px] leading-relaxed">
                  {item === 1
                    ? "We have less than 9 realtors."
                    : "Between 10 to 19 realtors"}
                </p>
                <a
                  href="#"
                  className="bg-gradient-to-r from-[#1977F2] to-[#D22163] bg-clip-text text-transparent mt-2 text-[14px] font-medium hover:underline"
                >
                  Use suggestion
                </a>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
