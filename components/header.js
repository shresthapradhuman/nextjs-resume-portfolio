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
    <header>
      <Link href={"/"}>
        <a className="home" onClick={handleNavClick}>
          <FaHome />
        </a>
      </Link>
      <nav className={`nav ${mobile ? "nav-mobile" : ""}`}>
        {nav.map((item, key) => (
          <Link key={key} href={`/${item.title}`}>
            <a
              className={`nav-link ${
                router.pathname == `/${item.title}` ? "nav-active" : ""
              }`}
              onClick={handleNavClick}
            >
              {item.title}
            </a>
          </Link>
        ))}
      </nav>
      <nav className="social">
        {social.map((item, key) => (
          <Link key={key} href={item.url}>
            <a className="social-link">{item.icon}</a>
          </Link>
        ))}
      </nav>
      <Link href={"/contact"}>
        <a className="hire">
          Hire Me{" "}
          <span>
            <FaPaperPlane />
          </span>
        </a>
      </Link>
      <span className="hamburger" onClick={handleMobileClick}>
        {mobile ? <FaTimes /> : <FaBars />}
      </span>
    </header>
  );
}

export default Header;
