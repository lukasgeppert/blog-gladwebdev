import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../lib/postMetaData";
import Image from "next/image";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

function BlogPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div className="px-10 pb-28">
      <section className="space-y-2 border-purple-600 text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              src={post.data.image}
              alt="Blog Image"
              fill
              className="object-cover object-center mx-auto"
            />
          </div>
          <section className="p-5 bg-purple-600 w-full">
            <div className="flex flex-col justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.data.title}</h1>
                <p className="mt-2">{post.data.date}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src={post.data.authorImage}
                  alt={post.data.author}
                  height={24}
                  width={24}
                  className="rounded-full"
                />
                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.data.author}</h3>
                  <div></div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="italic pt-10">{post.data.subtitle}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.data.categories.map((category: string, index: number) => (
                  <p
                    key={index}
                    className="bg-[#f7ab0a] text-white px-3 py-1 uppercase text-xs rounded-full font-semibold mt-4"
                  >
                    {category}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <article className="prose md:prose-lg lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}

export default BlogPage;
