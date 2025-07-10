import { ContactSection } from "@/components/contact-section/contact-section";
import Image from "next/image";

const Contacts: React.FC = () => {
  return (
    <section className="pt-10 sm:pt-12 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl pt-14">
        {/* thumb */}
        <div className="relative h-44">
          <Image
            src={"/assets/contacts-banner.png"}
            alt="Contacts Banner"
            fill
            objectFit="cover"
            objectPosition="center"
            quality={75}
            className="brightness-50 rounded-2xl"
          />
        </div>
        <ContactSection />
      </div>
    </section>
  );
};

export default Contacts;
