import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
function Post({ frontmatter: { title, date, cover_image }, slug, content }) {
  return (
    <section className="post">
      <h2>{title}</h2>
      <span>{date}</span>
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
