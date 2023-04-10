import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "next-share";
import { useRouter } from "next/router";
function Post({
  frontmatter: { title, date, cover_image, category },
  slug,
  content,
}) {
  let route = useRouter();
  return (
    <section className="px-5 py-5 my-5 mt-3 bg-white shadow forum shadow-slate-400 rounded-2xl">
      <h2 className="mb-1 text-3xl font-medium">{title}</h2>
      <div className="flex flex-wrap justify-between">
        <p>
          {category.map((item, key) => (
            <span key={key} className="px-2 py-1 mr-1 bg-orange-400 rounded-md">
              {item}
            </span>
          ))}
        </p>
        <p>{date}</p>
      </div>
      <hr></hr>
      <ReactMarkdown>{content}</ReactMarkdown>
      <div className="flex items-center mt-5 border-t-2">
        <p className="mr-2 text-xl font-medium">Share On :</p>
        <FacebookShareButton
          url={`https://shresthapradhuman.com.np/${route.asPath}`}
          quote={title}
          hashtag={title}
        >
          <FacebookIcon size={29} />
        </FacebookShareButton>
        <LinkedinShareButton url={`https://shresthapradhuman.com.np/${route.asPath}`}>
          <LinkedinIcon size={29} />
        </LinkedinShareButton>
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
