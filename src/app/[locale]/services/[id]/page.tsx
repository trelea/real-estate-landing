import { ContactSection } from "@/components/contact-section/contact-section";
import { getService } from "@/features/services/api";
import { ServiceArticle } from "@/features/services/components/service-article";
import { LocaleType } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: LocaleType; id: string }>;
}

const Service: React.FC<Props> = async ({ params }) => {
  const { locale, id } = await params;
  const service = await getService({ id });

  return (
    <section className="pt-10 sm:pt-12 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <ServiceArticle service={service} locale={locale} />
        <ContactSection />
      </div>
    </section>
  );
};

export default Service;
