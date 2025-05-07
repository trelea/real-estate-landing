import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Onest } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { ContactsPopover } from "@/components/navbar/contacts-popover";
import Script from "next/script";

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
      <Script
        dangerouslySetInnerHTML={{
          __html: `
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/681baf8d7d253019118f1a16/1iqm3ilde';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
`,
        }}
      />
      <body className={onest.className}>
        <NextIntlClientProvider>
          <main className="min-h-screen w-screen bg-foreground/[2.5%]">
            {/* navbar */}
            <Navbar />
            {/* children */}
            {children}
            {/* footer */}
            <Footer />
            <ContactsPopover />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
