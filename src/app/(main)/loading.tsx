import { ArrowPathIcon } from "@heroicons/react/24/outline";
export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <ArrowPathIcon className="h-10 w-10 animate-spin text-primary" />
    </div>
  );
}
