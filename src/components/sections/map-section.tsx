import { Card, CardContent } from '@/components/ui/card';

export function MapSection() {
    return (
        <section className="w-full py-12 md:py-20 lg:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-primary">
                            Lokasi
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-2xl">
                            Desa Bautkan, Kecamatan Lenteng, Kabupaten Sumenep,
                            Jawa Timur, Indonesia.
                        </p>
                    </div>
                </div>
                <div className="mx-auto mt-10 md:mt-16 max-w-5xl">
                    <Card className="overflow-hidden shadow-lg border-2">
                        <CardContent className="p-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63827.931595100985!2d100.3644466447333!3d-0.9707117490868641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4ba2f5490cd5d%3A0x2c3eb0c3e15c1925!2sKec.%20Lubuk%20Begalung%2C%20Kota%20Padang%2C%20Sumatera%20Barat!5e0!3m2!1sid!2sid!4v1751199103963!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                className="w-full h-[300px] md:h-[450px] lg:h-[500px]"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Peta Lokasi Desa Bautkan"
                            ></iframe>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
