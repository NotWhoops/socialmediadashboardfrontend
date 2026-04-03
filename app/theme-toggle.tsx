'use client';

import { Button } from "flowbite-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
    // const (theme, setTheme) = useTheme();

    return (
        <Button size="icon" className="rounded-full">
            <div className="absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"></div>
            <div className="absolute h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale- 100"></div>
        </Button>
    );
};