import Image from "next/image";
import Link from "next/link";

function BlogCard({ title, image, date, excerpt, link }) {
  return (
    <>
      <div className="shadow shadow-slate-400">
        <div className=" overflow-hidden mb-2">
          <Image
            src={image}
            width={200}
            height={200}
            layout={`responsive`}
            alt="post-img"
            className=" w-full object-cover object-center transition-all ease-in-out duration-700 scale-105 hover:scale-150 "
          />
        </div>
        <div className="p-2">
          <h2 className="text-xl capitalize mb-2">{title}</h2>
          <span className="text-xs font-medium rounded block mb-2">{date}</span>
          <p className="text-base font-light h-20">{excerpt.slice(0, 100)}..</p>
          <Link href={`/forums/${link}`}>
            <a className=" float-right my-2 text-blue-400 border-b-2 border-b-white hover:border-b-2 hover:border-b-blue-400 transition-all ease-in-out duration-100">Read More ..</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
