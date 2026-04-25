import { site } from "@/lib/site";

export function TopBar() {
  return (
    <div className="w-full bg-warning text-ink">
      <div className="mx-auto max-w-6xl px-4 py-2 text-center text-sm font-medium">
        <span aria-hidden className="mr-2">
          ⚠
        </span>
        {site.topBar}
      </div>
    </div>
  );
}
