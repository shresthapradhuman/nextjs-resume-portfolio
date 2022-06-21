import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { FacebookIcon, FacebookShareButton } from "next-share";
import { useRouter } from "next/router";
function Post({
  frontmatter: { title, date, cover_image, category },
  slug,
  content,
}) {
  let route = useRouter();
  return (
    <section className="forum my-5 mt-3 shadow shadow-slate-400 rounded-2xl py-5 px-5 bg-white">
      <h2 className="text-3xl font-medium mb-1">{title}</h2>
      <div className="flex justify-between flex-wrap">
        <p>
          {category.map((item, key) => (
            <span
              key={key}
              className="px-2 py-1 bg-orange-400 mr-1 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
        <p>{date}</p>
      </div>
      <hr></hr>
      <ReactMarkdown>{content}</ReactMarkdown>
      <div className="flex items-center border-t-2 mt-5">
        <p className="mr-2 text-xl font-medium">Share On :</p>
        <FacebookShareButton
          url={`https://shresthapradhuman.com.np/${route.asPath}`}
          quote={title}
        >
          <FacebookIcon size={29} />
        </FacebookShareButton>
      </div>
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
