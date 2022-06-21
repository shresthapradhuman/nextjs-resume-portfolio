import fs from "fs";
import matter from "gray-matter";
import { useRouter } from "next/router";
import path from "path";
import Categroies from "../../components/Categroies";
import moment from "moment";
import Archives from "../../components/Archives";
import BlogCard from "../../components/BlogCard";
import Pagination from "../../components/Pagination";
import { useState, useEffect } from "react";

const Forum = ({ posts, categories, archives }) => {
  const [data, setData] = useState(posts);
  const router = useRouter();
  let page = parseInt(router.query.page);
  let perPage = page ? page * 6 : 6;
  /** use */
  useEffect(() => {
    let cat = router.query.cat;
    let dat = router.query.dt;
    if (cat === undefined || dat !== undefined) {
      let result = posts.filter((item) => {
        let dt = moment(new Date(item.date)).format("YYYY MMMM");
        return dt === dat;
      });
      setData(result);
    }
    if (dat === undefined || cat !== undefined) {
      let result = posts.filter((item) => item.category.includes(cat));
      setData(result);
    }
  }, [posts, router]);
  let pgFltr =
    data.length > 0
      ? data.slice(perPage - 6, perPage)
      : posts.slice(perPage - 6, perPage);
  let totalCount = data.length > 0 ? data.length : posts.length;

  return (
    <>
      <section className=" bg-white mb-5 mt-3 pb-4 ">
        {/* content */}
        <div className="grid  md:grid-cols-[minmax(0,_1fr)_minmax(0,_0.4fr)] gap-1">
          <article className="border-r shadow shadow-slate-400 pb-8">
            <h1 className="title mb-5 p-2 text-2xl font-light">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
              {pgFltr.map((post, key) => (
                <BlogCard
                  key={key}
                  title={post.title}
                  image={post.cover_image}
                  excerpt={post.excerpt}
                  category={post.category}
                  link={post.slug}
                  date={post.date}
                />
              ))}
            </div>
          </article>
          <aside className="border shadow-md">
            {/* archive list */}
            <Archives data={archives} title={"Archive"} />
            {/* category list */}
            <Categroies data={categories} title={"Categories"} />
          </aside>
        </div>
        <Pagination totalCount={totalCount} router={router} />
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  /** get files from the posts dir */
  const files = fs.readdirSync(path.join("./data/posts"));
  /** */
  const posts = files.map((filename) => {
    /** Create Slug */
    const slug = filename.replace(".md", "");
    /** Get formatter */
    const markdownWithMeta = fs.readFileSync(
      path.join("./data/posts", filename),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);
    data.slug = slug;
    return data;
  });
  return {
    props: {
      posts: posts.sort((a, b) => new Date(b.date) - new Date(a.date)),
      categories: getCategory(posts),
      archives: getArchive(posts),
    },
  };
};

function getCategory(posts) {
  let list = [];
  posts.map((post) => {
    let categories = post.category;
    categories.forEach((category) => {
      list = [...list, category];
    });
  });
  return list;
}

function getArchive(posts) {
  let list = [];
  posts.map((post) => {
    let d = new Date(post.date);
    list = [...list, moment(new Date(post.date)).format("YYYY MMMM")];
  });
  return list;
}

export default Forum;
