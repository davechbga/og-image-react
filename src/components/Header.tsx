
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <img src="/placeholder.svg" alt="Logo" className="h-6 w-6" /> */}
          <h1 className="font-bold text-xl">OG Image Forge</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
