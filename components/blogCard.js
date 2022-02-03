import Image from "next/image";
import Link from "next/link";

function BlogCard({ title, image, date, category, excerpt, link }) {
  return (
    <>
      <div className="shadow shadow-slate-400">
        <div className=" overflow-hidden mb-2 shadow shadow-slate-400">
          <Image
            src={image}
            width={200}
            height={200}
            layout={`responsive`}
            alt="post-img"
            className=" w-full object-center transition-all ease-in-out duration-700 scale-105 hover:scale-110 "
            priority
          />
        </div>
        <div className="p-2">
          <h2 className="text-xl capitalize mb-2">{title}</h2>
          <div className="mb-2">
            {category.map((item, key)=>(
            <span key={key} className="px-1 py-1 bg-orange-400 mr-1 rounded-md text-sm">{item}</span>
            ))}
          </div>
          <span className="text-xs font-medium rounded block mb-2">{date}</span>
          <p className="text-base font-light h-20">{excerpt.slice(0, 100)}..</p>
          <Link href={`/forums/${link}`}>
            <a className=" float-right my-2 text-orange-700 border-b-2 border-b-white hover:border-b-2 hover:border-b-blue-400 transition-all ease-in-out duration-100">
              Read More ..
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
