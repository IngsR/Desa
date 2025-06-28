import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const wisataData = [
    {
        title: "Air Terjun Bautkan",
        description: "Nikmati kesegaran dan keindahan air terjun tersembunyi yang menjadi primadona desa.",
        image: "/wisata/air-terjun.jpg",
        hint: "waterfall nature"
    },
    {
        title: "Bukit Harapan",
        description: "Saksikan pemandangan matahari terbit yang memukau dari puncak bukit dengan panorama desa.",
        image: "/wisata/bukit-harapan.jpg",
        hint: "hill sunrise"
    },
    {
        title: "Sawah Terasering",
        description: "Jelajahi keindahan sawah terasering yang hijau dan menenangkan, khas pedesaan.",
        image: "/wisata/sawah-terasering.jpg",
        hint: "rice paddies"
    }
];

export function WisataSection() {
    return (
        <section id="wisata" className="w-full py-12 md:py-20 lg:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-primary">
                            Pesona Wisata
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-2xl">
                            Temukan keindahan alam dan tempat-tempat menarik yang ditawarkan oleh Desa Bautkan.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
                    {wisataData.map((item, index) => (
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
