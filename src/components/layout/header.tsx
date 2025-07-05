'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Beranda' },
        { href: '/tentang-desa', label: 'Tentang Desa' },
        { href: '/galeri', label: 'Galeri' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-animated-gradient">
            <div className="container flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold">
                    <Image
                        src="/logo.png"
                        alt="Lubuk Begalung Logo"
                        width={28}
                        height={28}
                    />
                    <span className="font-headline text-2xl">
                        Lubuk Begalung
                    </span>
                </Link>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center gap-8 text-xl font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'group relative font-nav font-bold transition-colors hover:text-primary',
                                    pathname === link.href
                                        ? 'text-primary'
                                        : 'text-muted-foreground/80',
                                )}
                            >
                                {link.label}
                                <span
                                    className={cn(
                                        'absolute bottom-[-6px] left-0 h-0.5 w-full origin-center scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100',
                                        pathname === link.href && 'scale-x-100',
                                    )}
                                />
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Buka menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="w-full max-w-[320px]"
                            >
                                <SheetHeader>
                                    <SheetTitle className="sr-only">
                                        Menu Navigasi
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col h-full">
                                    <nav className="grid gap-6 text-xl font-medium mt-6">
                                        <Link
                                            href="/"
                                            className="flex items-center gap-2 font-bold text-lg mb-4"
                                        >
                                            <Image
                                                src="/logo.png"
                                                alt="Bautkan Digital Logo"
                                                width={28}
                                                height={28}
                                            />
                                            <span className="font-headline">
                                                Bautkan Digital
                                            </span>
                                        </Link>
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={cn(
                                                    'font-nav font-bold transition-colors hover:text-primary',
                                                    pathname === link.href
                                                        ? 'text-foreground'
                                                        : 'text-muted-foreground',
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </nav>
                                    <div className="mt-auto mb-6 flex justify-center">
                                        <ThemeToggle />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
