import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
function Post({
  frontmatter: { title, date, cover_image, category },
  slug,
  content,
}) {
  return (
    <section className="forum my-5 mt-3 shadow shadow-slate-400 rounded-2xl py-10 px-5 bg-white">
      <h2 className="text-xl font-medium mb-2">{title}</h2>
      <div className="mb-2">
        {category.map((item, key) => (
          <span
            key={key}
            className="px-1 py-1 bg-orange-400 mr-1 rounded-md text-sm"
          >
            {item}
          </span>
        ))}
      </div>
      <span className="block mb-2 text-lg font-medium">{date}</span>
      <ReactMarkdown>{content}</ReactMarkdown>
    </section>
  );
}

export default Post;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("./data/posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("./data/posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
