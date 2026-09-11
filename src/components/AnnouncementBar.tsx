import { cn } from "../lib/utils";

export function AnnouncementBar() {
  return (
    <div className="bg-brand-dark text-white text-xs sm:text-sm py-2 px-4 text-center font-medium tracking-wide">
      <span className="opacity-90">2026 Harvest Week</span>
      <span className="mx-2 opacity-50">|</span>
      <span className="text-brand-green font-semibold">Est. Delivery — 3-6 Days</span>
      <span className="mx-2 opacity-50">|</span>
      <span className="opacity-90">Order Now</span>
    </div>
  );
}
