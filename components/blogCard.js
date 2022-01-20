import Image from "next/image";
import Link from "next/link";

function BlogCard({ title, image, date, excerpt, link }) {
  return (
    <>
      <div className="card">
        <div className="card-head">
          <Image
            src={image}
            width={200}
            height={200}
            layout={`responsive`}
            alt="post-img"
          />
        </div>
        <div className="card-body">
          <h2>{title}</h2>
          <span>{date}</span>
          <p>{excerpt.slice(0, 50)}..</p>
          <Link href={`/blog/${link}`}>
            <a>Read More ..</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
