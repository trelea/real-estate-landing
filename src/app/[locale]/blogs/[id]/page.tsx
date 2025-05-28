import { ContactSection } from "@/components/contact-section/contact-section";
import { getBlog } from "@/features/blogs/api";
import { BlogArticle } from "@/features/blogs/components/blog-article";
import { LocaleType } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: LocaleType; id: string }>;
}

const Blog: React.FC<Props> = async ({ params }) => {
  const { locale, id } = await params;
  const blog = await getBlog({ id });
  return (
    <section className="pt-14 sm:pt-24 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <BlogArticle blog={blog} locale={locale} />
        <ContactSection />
      </div>
    </section>
  );
};

export default Blog;
