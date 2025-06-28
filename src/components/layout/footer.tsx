import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-muted/50 py-6 md:py-8 w-full">
            <div className="container flex flex-col items-center justify-center gap-4">
                <p className="text-base text-muted-foreground text-center">
                    © 2025 Desa.Ing.
                </p>
                <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <Link
                        href="/"
                        className="text-base text-muted-foreground transition-colors hover:text-primary"
                    >
                        Beranda
                    </Link>
                    <Link
                        href="/tentang-desa"
                        className="text-base text-muted-foreground transition-colors hover:text-primary"
                    >
                        Tentang Desa
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
