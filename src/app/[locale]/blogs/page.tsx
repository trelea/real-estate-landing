import { getBlogs } from "@/features/blogs/api";
import { BlogCard } from "@/features/blogs/components/blog-card";
import { LocaleType } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: LocaleType }>;
}

const Blogs: React.FC<Props> = async ({ params }) => {
  const { locale } = await params;
  const blogs = await getBlogs();

  return (
    <section className="pt-14 sm:pt-24 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col gap-8 pt-10 pb-24">
        <h1 className="text-[40px] font-bold">Blogs</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
