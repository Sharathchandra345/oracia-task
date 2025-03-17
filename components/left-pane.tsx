import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const LeftPane = () => {
  return (
    <div
      className={cn(
        "w-20 h-screen bg-[#F3F5F7] text-white flex flex-col items-center py-4"
      )}
    >
      <div className="mb-6 relative">
        <Image src="/assets/logo.png" alt="Logo" width={50} height={30} />
      </div>

      <div className="h-12"></div>
    </div>
  );
};

export default LeftPane;
