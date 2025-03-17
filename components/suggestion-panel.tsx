import { Card } from "@/components/ui/card";

export default function SuggestionPanel() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="text-xl">🚀</span>
        Best follow-up suggestions
      </div>

      <div className="mt-2 space-y-4">
        <Card className="p-4 bg-white shadow-sm">
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
        </Card>

        <Card className="p-4 bg-white shadow-sm">
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
        </Card>
      </div>
    </div>
  );
}
