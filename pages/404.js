import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

function NotFound() {
  return (
    <section className=" h-full flex flex-col items-center justify-center bg-white my-5 shadow shadow-slate-400 rounded-md">
      <p className="text-3xl mb-5">Oops! We Could Not Found The Page</p>
      <Link href={"/"}>
        <a className="flex items-center text-xl">
          <FaArrowLeft className="mr-2"/> Go Back To Homepage
        </a>
      </Link>
    </section>
  );
}

export default NotFound;
