import { Card } from "@/components/ui/card";

export default function StatusBar() {
  return (
    <div className="grid grid-cols-3 p-4 gap-2">
      <Card className="p-2 bg-white shadow-sm">
        <div className="text-xs text-gray-500">Buyer emotion</div>
        <div className="font-medium text-blue-500">Excited 😀</div>
      </Card>

      <Card className="p-2 bg-white shadow-sm">
        <div className="text-xs text-gray-500">Onboarding Stage</div>
        <div className="font-medium text-blue-500">Role & Personalization</div>
      </Card>

      <Card className="p-2 bg-white shadow-sm">
        <div className="text-xs text-gray-500">Current Goal</div>
        <div className="font-medium text-blue-500">Identify user role</div>
      </Card>
    </div>
  );
}
