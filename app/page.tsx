import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ChatInterface from "@/components/chat-interface";
import StatusBar from "@/components/status-bar";
import ConversationVisualizer from "@/components/conversation-visualizer";
import SuggestionPanel from "@/components/suggestion-panel";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b p-4 bg-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-gray-700 text-sm">Welcome,</h1>
            <h2 className="text-lg font-semibold">Fabio Rossi</h2>
          </div>
        </div>
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
          <AvatarFallback>FR</AvatarFallback>
        </Avatar>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-0">
        <div className="col-span-5 border-r">
          <div className="border-b p-4 flex items-center gap-4">
            <Avatar className="h-10 w-10 bg-gradient-to-r from-purple-500 to-pink-500">
              <AvatarFallback>OA</AvatarFallback>
            </Avatar>
            <span className="font-medium">OraclA</span>
          </div>
          <ChatInterface />
        </div>

        <div className="col-span-2">
          <div className="border-b p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-6 w-6 mr-2 bg-gradient-to-r from-purple-500 to-pink-500">
                <AvatarFallback>OA</AvatarFallback>
              </Avatar>
              <span>OraclA</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-600">OraclA</span>
              <span className="text-pink-500 ml-1">ci-pro</span>
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

          <div className="p-4">
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

            <div className="mt-2 p-4 bg-white shadow-sm rounded-lg border">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-500">
                  <AvatarFallback>OA</AvatarFallback>
                </Avatar>
                <p className="text-sm">
                  Hello Fabio Rossi, welcome to ORAVOX, I'm OraclA, your sales
                  intelligence agent. To tailor your experience, please{" "}
                  <span className="font-bold">select your role</span>
                </p>
              </div>
            </div>

            <ConversationVisualizer />
            <SuggestionPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
