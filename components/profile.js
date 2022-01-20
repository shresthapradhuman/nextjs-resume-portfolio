import Image from "next/image";
import { profile } from "../data/setting";
import { FaDownload } from "react-icons/fa";
import { GiSunglasses } from "react-icons/gi";
import Typewriter from "typewriter-effect";
import Link from "next/link";
function Profile() {
  return (
    <>
      <section className="profile">
        <h2>{profile.name}</h2>
        <Typewriter
          options={{
            strings: profile.role,
            autoStart: true,
            loop: true,
            delay: 100,
          }}
        />
        <figure>
          <Image
            src={`/images/${profile.image}`}
            alt="profile-image"
            width="200"
            height="200"
            layout={`responsive`}
            priority={true}
          />
        </figure>
        <ul>
          <li>
            <GiSunglasses size={30} />
          </li>
          {profile.details.map((item, key) => (
            <li key={key}>
              <span>{item.label} :</span> {item.value}
            </li>
          ))}
        </ul>
        <span className="cv">
          <Link href={"/download/resume.pdf"}>
            <a target={"_blank"}>
              Download CV
              <span>
                <FaDownload />
              </span>
            </a>
          </Link>
        </span>
      </section>
    </>
  );
}
export default Profile;
