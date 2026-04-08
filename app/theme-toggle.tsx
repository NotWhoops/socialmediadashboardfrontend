"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <label
      htmlFor="check"
      className="flex bg-[#378fe6] bg-linear-to-r from-[#378fe6] to-[#3eda82] cursor-pointer relative w-20 h-10 rounded-full"
    >
      <input
        id="check"
        type="checkbox"
        className="sr-only peer"
        checked={isDark}
        onChange={() => setTheme(isDark ? "light" : "dark")}
      />

      <span
        className={`
          w-2/5 h-4/5 absolute rounded-full top-1 transition-all duration-500
          ${isDark ? "left-11 bg-white" : "left-1 bg-black"}
        `}
      />
    </label>
  );
};