import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
