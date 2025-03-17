"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Paperclip, Clock, Send } from "lucide-react";
import {
  useConversation,
  conversationFlow,
} from "@/context/conversation-context";

export default function ChatInterface() {
  const { messages, currentStep } = useConversation();
  const [bgStyle, setBgStyle] = useState({});

  useEffect(() => {
    setBgStyle({
      backgroundImage: "url('/assets/bg-image.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    });
  }, []);
  const progress = Math.round(
    (currentStep / (conversationFlow.length - 1)) * 100
  );

  const containerHeight = 80;

  const progressHeight = (progress / 100) * containerHeight;
  const blueFillTop = containerHeight - progressHeight;
  const textOffset = progressHeight >= 20 ? 20 : 0;
  let textTop = blueFillTop + textOffset;
  const maxTextTop = containerHeight - 16;
  if (textTop > maxTextTop) {
    textTop = maxTextTop;
  }

  return (
    <div className="flex h-[calc(100vh-10rem)] overflow-hidden">
      <div className="relative ml-[2px] mr-[2px] w-[36px] h-full border border-gray-300 rounded">
        <div
          className="absolute bottom-0 left-0 w-full bg-blue-500 rounded"
          style={{ height: `${progress}%` }}
        ></div>
        <div
          className="absolute left-0 w-full flex justify-center"
          style={{ bottom: "10px" }}
        >
          <span className="text-sm text-white">{progress}%</span>
        </div>
      </div>

      <div className="flex flex-col flex-1" style={bgStyle}>
        <div className="flex-1 p-4 overflow-y-auto bg-opacity-70">
          <div className="max-w-3xl mx-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 mb-4 ${
                  msg.sender === "User" ? "justify-end" : ""
                }`}
              >
                {msg.sender === "User" ? (
                  <div className="flex gap-3 items-end">
                    <div className="p-3 rounded-lg shadow-sm max-w-[90%] bg-[#E1FFC7] flex items-end gap-2">
                      <p className="flex-1">{msg.text}</p>
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        12:00
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
                ) : (
                  <div className="flex gap-3 items-start">
                    <Avatar className="h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-500">
                      <AvatarFallback>OA</AvatarFallback>
                    </Avatar>
                    <div className="p-3 rounded-lg shadow-sm max-w-[80%] bg-white flex items-end gap-2">
                      <p className="flex-1">{msg.text}</p>
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        12:00
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
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
