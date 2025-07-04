import { ContactSection } from "@/components/contact-section/contact-section";
import { getPrivacyPolicyContent } from "@/features/privacy-policy/api";
import { LocaleType } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: LocaleType }>;
}

const PrivacyPolicy: React.FC<Props> = async ({ params }) => {
  const { locale } = await params;
  return (
    <section className="pt-10 sm:pt-12 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <section
          className="py-8 sm:py-14 text-balance"
          dangerouslySetInnerHTML={{
            __html: await getPrivacyPolicyContent({ locale }),
          }}
        ></section>
        <ContactSection />
      </div>
    </section>
  );
};

export default PrivacyPolicy;
