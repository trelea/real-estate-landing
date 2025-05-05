import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Onest } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

const onest = Onest({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={onest.className}>
        <NextIntlClientProvider>
          <main className="min-h-screen w-screen bg-background">
            {/* navbar */}
            <Navbar />
            {/* children */}
            {children}
            {/* footer */}
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
