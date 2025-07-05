'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Render a placeholder on the server and initial client render to avoid hydration mismatch
        return <div className="h-8 w-14 rounded-full bg-muted/50" />;
    }

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-muted transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        >
            <span className="sr-only">Toggle theme</span>
            <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 inline-block h-7 w-7 transform rounded-full bg-background shadow-lg ring-0 transition-transform duration-1000 ease-in-out"
                style={{
                    transform:
                        theme === 'dark'
                            ? 'translateX(1.5rem)'
                            : 'translateX(0.25rem)',
                }}
            >
                <span
                    className="absolute inset-0 flex h-full w-full items-center justify-center"
                    aria-hidden="true"
                >
                    <Sun className="h-4 w-4 text-foreground rotate-0 scale-100 opacity-100 transition-all duration-1000 ease-in-out dark:-rotate-90 dark:scale-0 dark:opacity-0" />
                </span>
                <span
                    className="absolute inset-0 flex h-full w-full items-center justify-center"
                    aria-hidden="true"
                >
                    <Moon className="h-4 w-4 text-foreground rotate-90 scale-0 opacity-0 transition-all duration-1000 ease-in-out dark:rotate-0 dark:scale-100 dark:opacity-100" />
                </span>
            </span>
        </button>
    );
}
