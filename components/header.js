import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaHome, FaPaperPlane, FaTimes } from "react-icons/fa";
import { nav, social } from "../data/setting";
function Header() {
  const [mobile, setMobile] = useState(false);
  const router = useRouter();
  const handleMobileClick = () => {
    setMobile(!mobile);
  };
  const handleNavClick = () => {
    setMobile(false);
  };
  return (
    <header className="rounded-xl relative shadow shadow-slate-400 h-16 flex bg-white justify-between items-center">
      <Link href={"/"}>
        <a
          className="h-full rounded-tl-md hover:bg-yellow-500 rounded-bl-md w-16 flex items-center justify-center bg-yellow-400"
          onClick={handleNavClick} aria-label="home"
        >
          <FaHome size="30" />
        </a>
      </Link>
      <nav
        className={`${
          mobile ? "flex" : "hidden"
        } md:flex absolute md:relative md:top-0 w-full flex-col md:flex-row top-16 mt-1 md:mt-0 md:flex-1 z-10 bg-white rounded-md shadow shadow-slate-400 p-2 md:shadow-none `}
      >
        {nav.map((item, key) => (
          <Link key={key} href={`/${item.title}`}>
            <a
              className={` text-center py-4 md:py-0 md:px-2 border-b-2 md:border-0 last:border-b-0 uppercase hover:text-yellow-400 ${
                router.pathname == `/${item.title}` ? "text-black" : ""
              }`}
              onClick={handleNavClick}
            >
              {item.title}
            </a>
          </Link>
        ))}
      </nav>
      <div className="flex flex-auto justify-end md:flex-none mr-2">
        {social.map((item, key) => (
          <Link key={key} href={item.url}>
            <a className="px-1" target="_blank" rel="noreferrer" aria-label={item.label}>
              {item.icon}
            </a>
          </Link>
        ))}
      </div>
      <span
        className="flex items-center justify-center mx-2 cursor-pointer md:hidden"
        onClick={handleMobileClick}
      >
        {mobile ? <FaTimes size="20" /> : <FaBars size="20" />}
      </span>
    </header>
  );
}

export default Header;
