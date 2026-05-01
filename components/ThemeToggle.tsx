"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-10 h-10 rounded-full glass animate-pulse" />;

  return (
    <div className="flex p-1 rounded-full glass border-white/10 scale-90">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full transition-all ${
          theme === "light" ? "bg-white text-black shadow-lg" : "text-gray-500 hover:text-white"
        }`}
        aria-label="Light mode"
      >
        <Sun size={14} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full transition-all ${
          theme === "dark" ? "bg-purple-600 text-white shadow-lg" : "text-gray-500 hover:text-white"
        }`}
        aria-label="Dark mode"
      >
        <Moon size={14} />
      </button>
    </div>
  );
}
