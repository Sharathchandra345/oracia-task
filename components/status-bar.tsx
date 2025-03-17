export default function StatusBar() {
  return (
    <div className="grid grid-cols-3 px-2 py-3 text-center text-[#484848] text-sm border-t border-b border-gray-300">
      <div className="flex flex-col">
        <div className="text-[14px] text-black">Buyer emotion</div>
        <div className="font-medium text-blue-500 flex items-center justify-center gap-1">
          Excited <span>😀</span>
        </div>
      </div>

      <div className="border-l border-r border-gray-300 px-2">
        <div className="text-[14px] text-black">Onboarding Stage</div>
        <div className="font-medium text-blue-500 whitespace-nowrap">
          Role & Personalization
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-[14px] text-black">Current Goal</div>
        <div className="font-medium text-blue-500">Identify user role</div>
      </div>
    </div>
  );
}
