import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogCard from "../../components/blogCard";
import SortByDate from "../../utils/sortbydate";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

function Blog({ posts }) {
  let router = useRouter();
  let page = parseInt(router.query.page);
  let perPage = page ? page * 9 : 9;
  let datas = posts.slice(perPage - 9, perPage);
  let totalCount = posts.length;
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  return (
    <>
      <Head>
        <title>Portfolio | Blog</title>
      </Head>
      <section className="my-5 mt-3 shadow shadow-slate-400 rounded-2xl py-10 px-5 bg-white">
        <h1 className="title pb-2 mb-5 text-2xl font-medium">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {datas.map((post, key) => (
            <BlogCard
              key={key}
              title={post.frontmatter.title}
              image={post.frontmatter.cover_image}
              excerpt={post.frontmatter.excerpt}
              category = {post.frontmatter.category}
              link={post.slug}
              date={post.frontmatter.date}
            />
          ))}
        </div>
        {/* <div className="row">
          <div className="pagination">
            {range(1, Math.ceil(totalCount / 9)).map(
              (number, index) =>
                totalCount > 9 && (
                  <Link
                    key={index}
                    href={number > 1 ? `/blog/?page=${number}` : `/blog`}
                  >
                    <a>{number}</a>
                  </Link>
                )
            )}
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  /** Get files from the posts dir */
  const files = fs.readdirSync(path.join("./data/posts"));
  /** Get slug and front matters from posts */
  const posts = files.map((filename) => {
    /** Create Slug */
    const slug = filename.replace(".md", "");
    /** Get frontmatter */
    const markdownWithMeta = fs.readFileSync(
      path.join("./data/posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts: posts.sort(SortByDate),
    },
  };
}
