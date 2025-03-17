export default function ConversationVisualizer() {
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
        {/* Calculating possible conversation paths */}
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
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          <path d="M12 12 8 8" />
          <path d="M12 16v-4" />
        </svg>
      </div>

      <div className="mt-2 flex justify-center">
        <div className="relative w-full h-32">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400"
              style={{
                width: "8px",
                height: "8px",
                left: `${10 + (i % 20) * 5}%`,
                top: `${10 + Math.floor(i / 20) * 20}%`,
                opacity: i < 40 ? 1 : 0.5 - i / 200,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
