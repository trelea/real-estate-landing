import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Onest } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { ContactsPopover } from "@/components/navbar/contacts-popover";
import Script from "next/script";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "../globals.css";
import { Up } from "@/components/up";

const onest = Onest({
  subsets: ["latin"],
});

export const metadata = {
  title: "Dialog Imobil - Agenție imobiliară în Chișinău, Moldova",
  description:
    "Dialog Imobil - Agenție imobiliară în Chișinău, Moldova. Oferim servicii de vânzare, cumpărare și închiriere a proprietăților imobiliare.",
};

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
    <html lang={locale} className="scroll-smooth">
      <Script
        dangerouslySetInnerHTML={{
          __html: `
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/68681f32b5e9f0190b212deb/1ivbbjn6m';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
`,
        }}
      />

      <body className={onest.className}>
        <NuqsAdapter>
          <NextIntlClientProvider>
            <main className="min-h-screen w-screen bg-foreground/[2.5%] overflow-x-hidden">
              {/* navbar */}
              <Navbar locale={locale} />
              {/* children */}
              {children}
              {/* footer */}
              <Footer />
              <ContactsPopover />
              <Up />
            </main>
          </NextIntlClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
