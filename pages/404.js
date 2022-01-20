import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

function NotFound() {
  return (
    <section className="notfound">
      <p>Oops! We Could Not Found The Page</p>
      <Link href={"/"}>
        <a>
          <FaArrowLeft /> Go Back To Homepage
        </a>
      </Link>
    </section>
  );
}

export default NotFound;
