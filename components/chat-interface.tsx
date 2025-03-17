import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ChatInterface() {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div
        className="flex-1 p-4 overflow-auto"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-3 mb-4">
            <Avatar className="h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-500">
              <AvatarFallback>OA</AvatarFallback>
            </Avatar>
            <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
              <p>
                Hello Fabio Rossi, welcome to ORAVOX, I'm OraclA, your sales
                intelligence agent. To tailor your experience, please{" "}
                <span className="font-bold">select your role</span>
              </p>
              <span className="text-xs text-gray-400 mt-1 block text-right">
                12:00
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t p-2 bg-white flex items-center gap-2">
        <button className="p-2 text-gray-500 hover:text-gray-700">
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
            className="h-6 w-6"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Message"
          className="flex-1 p-2 outline-none text-gray-700"
        />
        <button className="p-2 text-gray-500 hover:text-gray-700">
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
            className="h-6 w-6"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </button>
        <button className="p-2 bg-blue-500 text-white rounded-full">
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
            className="h-6 w-6"
          >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
        </button>
      </div>
    </div>
  );
}
