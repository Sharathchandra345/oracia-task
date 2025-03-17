import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ChatInterface from "@/components/chat-interface";
import StatusBar from "@/components/status-bar";
import ConversationVisualizer from "@/components/conversation-visualizer";
import SuggestionPanel from "@/components/suggestion-panel";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <header className="border-b p-4 bg-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-[#484848]">
            <h1 className="text-[16px]">Welcome,</h1>
            <h2 className="text-[20px] font-semibold">Fabio Rossi</h2>
          </div>
        </div>
        <div className=" h-10 w-10 rounded-full bg-[#D9D9D9] "></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-10 gap-0">
        <div className="col-span-5 border-r">
          <div className="border-b p-4 flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage className="object-cover" />
              <AvatarFallback>OA</AvatarFallback>
            </Avatar>

            <span className="font-medium">OraclA</span>
          </div>
          <ChatInterface />
        </div>

        <div
          className="col-span-5 flex flex-col h-screen overflow-y-auto"
          style={{
            background: `linear-gradient(
      0% #A59FC3,
      22% #542B81,
      51% #DC379F,
      73% #F3A199,
      92% #FAF6E8
    )`,
          }}
        >
          <div className="border-b p-4 flex items-center justify-center w-full">
            <div className="flex items-center text-center text-[20px]">
              <span className="text-[#A59FC3]">OraclA</span>
              <span className="text-[#DC379F] ml-1">c1-pro</span>
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
                className="ml-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          <StatusBar />

          <div className="flex-1 overflow-y-auto p-4">
            <div className="text-sm text-gray-600 flex items-center gap-2">
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Last message
            </div>

            <div className="flex items-end gap-2 mt-2">
              <div className="relative flex flex-col items-center">
                <Avatar className="h-6 w-6 bg-gradient-to-r from-[#A59FC3] to-[#DC379F]">
                  <AvatarImage className="object-cover" />
                  <AvatarFallback>OA</AvatarFallback>
                </Avatar>
              </div>

              <div className="relative bg-white shadow-sm rounded-xl border border-[#EAE7DC] p-3 text-black leading-relaxed max-w-[90%] text-[16px]">
                <div className="absolute -left-2 bottom-2 w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-r-[#F9F7F2] border-b-[6px] border-b-transparent"></div>

                <p className="text-sm">
                  Hello Fabio Rossi, welcome to ORAVOX, I'm OraclA, your sales
                  intelligence agent. To tailor your experience, please{" "}
                  <span className="font-bold">select your role</span>
                </p>
              </div>
            </div>

            <ConversationVisualizer />
            <div className="overflow-y-auto h-full">
              <SuggestionPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
