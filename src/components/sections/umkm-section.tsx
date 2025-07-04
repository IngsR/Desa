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
        title: 'Kerajinan Khas Minangkabau',
        description:
            'Kerajinan tangan khas Minangkabau buatan pengrajin lokal – hasil budaya turun-temurun seperti songket, ukiran kayu, dan sulaman tangan yang sarat nilai seni dan tradisi."',
        image: '/umkm/keripik-singkong.jpg',
        hint: 'cassava chips',
    },
    {
        title: 'Oleh-oleh Khas minangkabau',
        description:
            'Aneka oleh-oleh makanan khas Minangkabau yang autentik dan menggugah selera, dibuat langsung oleh UMKM lokal Padang dengan resep turun-temurun.',
        image: '/umkm/batik.jpg',
        hint: 'batik fabric',
    },
    {
        title: 'Keripik singkong',
        description:
            'Keripik singkong khas Minangkabau – camilan tradisional buatan tangan warga lokal, dibumbui rempah asli dan digoreng renyah untuk oleh-oleh khas Padang yang menggugah selera.',
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
                            UMKM Unggulan
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-2xl">
                            nikmati beragam kuliner khas Minang yang menggugah
                            selera di sepanjang jalan.
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
