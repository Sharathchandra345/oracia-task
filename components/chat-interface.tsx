"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Paperclip, Clock, Send } from "lucide-react"; // Import icons from Lucide or use SVGs

const messages = [
  {
    sender: "OraclA",
    text: "Hello Fabio Rossi, welcome to ORAVOX, I’m OraclA, your sales intelligence agent. To tailor your experience, please select your role.",
    time: "12:00",
  },
  { sender: "User", text: "I am an Owner/Manager", time: "12:00" },
  {
    sender: "OraclA",
    text: "Understood, how many Realtors are in your organization?",
    time: "12:00",
  },
];

export default function ChatInterface() {
  const [bgStyle, setBgStyle] = useState({});

  useEffect(() => {
    setBgStyle({
      backgroundImage: "url('/assets/bg-image.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    });
  }, []);

  return (
    <div className="flex h-[calc(100vh-10rem)] overflow-hidden">
      {/* Progress Bar */}
      <div className="mt-[75%] ml-[2px] mr-[2px] w-[30px] h-[80px] bg-gradient-to-b from-[#1977F2] to-[#0E458C] text-white flex items-start justify-center">
        <span className="text-sm mt-4">15%</span>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col flex-1" style={bgStyle}>
        {/* Message Display Section */}
        <div className="flex-1 p-4 overflow-y-auto bg-opacity-70">
          <div className="max-w-3xl mx-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 mb-4 ${
                  msg.sender === "User" ? "justify-end" : ""
                }`}
              >
                {/* User Message */}
                {msg.sender === "User" && (
                  <div className="flex gap-3 items-end">
                    <div className="p-3 rounded-lg shadow-sm max-w-[90%] bg-[#E1FFC7] flex items-end gap-2">
                      <p className="flex-1">{msg.text}</p>
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        {msg.time}
                      </span>
                    </div>

                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/assets/Fabio.png"
                        className="h-full w-full"
                      />
                      <AvatarFallback>{msg.sender[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                )}

                {/* OraclA Message */}
                {msg.sender !== "User" && (
                  <div className="flex gap-3 items-start">
                    <Avatar className="h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-500">
                      <AvatarFallback>OA</AvatarFallback>
                    </Avatar>
                    <div className="p-3 rounded-lg shadow-sm max-w-[80%] bg-white flex items-end gap-2">
                      <p className="flex-1">{msg.text}</p>
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Message Input Section */}
        <div className="border-t p-2 bg-[#EEF4EE] flex items-center gap-2">
          <button className="p-2">
            <Paperclip className="h-5 w-5 text-gray-500" />
          </button>

          <input
            type="text"
            placeholder="Message"
            className="flex-1 p-2 rounded-full bg-white text-gray-700 outline-none shadow-sm"
          />

          <button className="p-2">
            <Clock className="h-5 w-5 text-gray-500" />
          </button>

          <button className="p-2 bg-gray-500 text-white rounded-full">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
