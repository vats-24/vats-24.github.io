"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function SketchAvatar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M60 18 C 45 16, 32 28, 30 45 C 28 62, 38 78, 52 80 C 66 82, 80 72, 84 58 C 88 44, 78 20, 60 18 Z" />
      <path d="M34 40 C 36 26, 48 18, 62 20 C 76 22, 84 32, 84 44" />
      <path d="M38 34 C 40 24, 52 18, 64 20" opacity="0.5" />
      <path d="M44 50 C 46 48, 50 48, 52 50" />
      <path d="M66 50 C 68 48, 72 48, 74 50" />
      <path
        d="M42 50 C 40 46, 46 44, 50 46 C 54 48, 52 54, 48 54 C 44 54, 40 52, 42 50 Z"
        opacity="0.6"
      />
      <path
        d="M64 50 C 62 46, 68 44, 72 46 C 76 48, 74 54, 70 54 C 66 54, 62 52, 64 50 Z"
        opacity="0.6"
      />
      <path d="M52 50 L 64 50" opacity="0.6" />
      <path d="M58 54 C 57 58, 59 60, 61 60" />
      <path d="M50 66 C 54 70, 62 70, 66 66" />
      <path d="M30 96 C 34 88, 44 84, 60 84 C 76 84, 86 88, 90 96" />
      <path d="M38 90 L 44 96" opacity="0.3" />
      <path d="M46 88 L 52 94" opacity="0.3" />
      <path d="M68 88 L 74 94" opacity="0.3" />
      <path d="M76 90 L 82 96" opacity="0.3" />
    </svg>
  );
}

export function SketchRocket({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M40 8 C 34 20, 30 32, 30 44 L 30 56 C 30 60, 34 62, 40 62 C 46 62, 50 60, 50 56 L 50 44 C 50 32, 46 20, 40 8 Z" />
      <path d="M40 8 C 36 14, 34 18, 34 22" opacity="0.5" />
      <path d="M40 8 C 44 14, 46 18, 46 22" opacity="0.5" />
      <path d="M40 30 C 36 30, 34 34, 34 38 C 34 42, 36 44, 40 44 C 44 44, 46 42, 46 38 C 46 34, 44 30, 40 30 Z" />
      <path d="M30 50 L 22 60 L 30 58" />
      <path d="M50 50 L 58 60 L 50 58" />
      <path
        d="M34 62 C 32 68, 36 70, 40 72 C 44 70, 48 68, 46 62"
        opacity="0.6"
      />
      <path
        d="M14 20 L 16 24 L 20 25 L 16 26 L 14 30 L 12 26 L 8 25 L 12 24 Z"
        opacity="0.4"
      />
      <path
        d="M62 14 L 63 17 L 66 18 L 63 19 L 62 22 L 61 19 L 58 18 L 61 17 Z"
        opacity="0.4"
      />
    </svg>
  );
}

export function SketchComet({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M50 20 C 46 16, 40 18, 38 24 C 36 30, 40 34, 46 34 C 52 34, 54 28, 52 24 C 51 22, 50 20, 50 20 Z" />
      <path d="M40 30 C 30 36, 20 40, 10 44" opacity="0.6" />
      <path d="M42 34 C 32 40, 22 44, 12 48" opacity="0.4" />
      <path d="M38 26 C 28 32, 18 36, 8 40" opacity="0.4" />
      <path d="M30 36 L 28 42" opacity="0.3" />
      <path d="M24 38 L 22 44" opacity="0.3" />
      <path
        d="M60 40 L 61 43 L 64 44 L 61 45 L 60 48 L 59 45 L 56 44 L 59 43 Z"
        opacity="0.4"
      />
      <path
        d="M20 60 L 21 62 L 23 63 L 21 64 L 20 66 L 19 64 L 17 63 L 19 62 Z"
        opacity="0.4"
      />
    </svg>
  );
}

export function SketchArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12 L 20 12" />
      <path d="M14 6 L 20 12 L 14 18" />
    </svg>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="theme-toggle opacity-0" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="theme-toggle text-foreground"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="M12 4 C 10 4, 9 6, 9 8 C 9 10, 10 12, 12 12 C 14 12, 15 10, 15 8 C 15 6, 14 4, 12 4 Z" />
          <path d="M12 2 L 12 3" />
          <path d="M12 13 L 12 14" />
          <path d="M5 8 L 6 8" />
          <path d="M18 8 L 19 8" />
          <path d="M7 3 L 8 4" />
          <path d="M16 12 L 17 13" />
          <path d="M7 13 L 8 12" />
          <path d="M16 4 L 17 3" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="M18 14 C 14 16, 9 14, 8 10 C 7 6, 10 3, 14 3 C 12 5, 12 9, 14 11 C 16 13, 18 13, 18 14 Z" />
          <path d="M18 14 C 16 15, 13 15, 11 13" opacity="0.4" />
        </svg>
      )}
    </button>
  );
}
