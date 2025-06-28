import Image from 'next/image';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';

const umkmData = [
    {
        title: 'Keripik Singkong Bautkan',
        description:
            'Cicipi renyahnya keripik singkong asli buatan tangan warga dengan bumbu tradisional.',
        image: '/umkm/keripik-singkong.jpg',
        hint: 'cassava chips',
    },
    {
        title: 'Batik Tulis Madura',
        description:
            'Koleksi batik tulis dengan motif khas Madura yang unik dan penuh makna, dibuat oleh pengrajin lokal.',
        image: '/umkm/batik.jpg',
        hint: 'batik fabric',
    },
    {
        title: 'Madu Hutan Asli',
        description:
            'Madu murni dari hutan sekitar desa, dipanen secara lestari untuk menjaga kualitasnya.',
        image: '/umkm/madu-hutan.jpg',
        hint: 'honey jar',
    },
];

export function UmkmSection() {
    return (
        <section
            id="umkm"
            className="w-full py-12 md:py-20 lg:py-24 bg-muted/50"
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-primary">
                            UMKM
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-2xl">
                            Dukung dan nikmati produk-produk lokal berkualitas
                            hasil karya masyarakat Desa Bautkan.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
                    {umkmData.map((item, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
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
                                <CardDescription className="pt-2">
                                    {item.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
