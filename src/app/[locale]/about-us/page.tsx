import Image from "next/image";

import { ContactSection } from "@/components/contact-section/contact-section";
import { getAboutUsContent } from "@/features/about-us/api";
import { LocaleType } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: LocaleType }>;
}

const AboutUs: React.FC<Props> = async ({ params }) => {
  const { locale } = await params;
  return (
    <section className="pt-10 sm:pt-12 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 py-8 sm:py-14">
          <div className="lg:w-1/2">
            <Image
              src="/assets/aboutus.png"
              alt="About Us"
              width={500}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <section
            className="lg:w-1/2 text-balance"
            dangerouslySetInnerHTML={{
              __html: await getAboutUsContent({ locale }),
            }}
          ></section>
        </div>
        <ContactSection />
      </div>
    </section>
  );
};

export default AboutUs;
