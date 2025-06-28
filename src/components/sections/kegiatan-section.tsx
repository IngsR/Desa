import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const kegiatanData = [
    {
        title: "Gotong Royong Mingguan",
        description: "Setiap akhir pekan, warga bersama-sama membersihkan lingkungan untuk menjaga keasrian desa.",
        image: "/kegiatan/gotong-royong.jpg",
        hint: "community work"
    },
    {
        title: "Pengajian Rutin",
        description: "Kegiatan keagamaan yang mempererat tali silaturahmi antar warga setiap malam Jumat.",
        image: "/kegiatan/pengajian.jpg",
        hint: "people praying"
    },
    {
        title: "Pasar Desa",
        description: "Pasar tradisional yang digelar setiap hari Minggu, menjadi pusat ekonomi dan interaksi sosial.",
        image: "/kegiatan/pasar-desa.jpg",
        hint: "traditional market"
    }
];

export function KegiatanSection() {
    return (
        <section id="kegiatan" className="w-full py-12 md:py-20 lg:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-primary">
                            Kehidupan Masyarakat
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-2xl">
                            Melihat lebih dekat kegiatan rutin yang menjadi denyut nadi kehidupan sosial di Desa Bautkan.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
                    {kegiatanData.map((item, index) => (
                        <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardContent className="p-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    data-ai-hint={item.hint}
                                    width={600}
                                    height={400}
                                    className="w-full h-48 object-cover"
                                />
                            </CardContent>
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription className="pt-2">{item.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
