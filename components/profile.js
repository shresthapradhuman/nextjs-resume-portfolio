import Image from "next/image";
import { profile } from "../data/setting";
import { FaDownload } from "react-icons/fa";
import { GiSunglasses } from "react-icons/gi";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import * as gtag from "../lib/gtag";
import { useState } from "react";
function Profile() {
  const [score, setScore] = useState(0);
  const handleGA = () => {
    setScore(score++);

    gtag.event({
      action: "csv_download",
      category: "score",
      label: "score",
      value: score,
    });
  };
  return (
    <>
      <section className="profile mt-2 shadow shadow-slate-400 rounded-2xl items-center bg-white py-5">
        <h2 className="text-2xl pl-2 font-medium">{profile.name}</h2>
        <Typewriter
          options={{
            strings: profile.role,
            autoStart: true,
            loop: true,
            delay: 100,
          }}
        />
        <figure className="overflow-hidden -mt-4">
          <Image
            src={`/images/${profile.image}`}
            alt="profile-image"
            width="200"
            height="200"
            layout={`responsive`}
            priority={true}
            className="object-cover w-full transition ease-in-out duration-700 scale-100 hover:scale-105"
          />
        </figure>
        <ul className="ml-10 mt-2">
          <li className="pb-4 pl-4 border-l-2 relative before:absolute before:border-black before:rounded-full before:border-0">
            <span className="icon">
              <GiSunglasses size="40" />
            </span>
          </li>
          {profile.details.map((item, key) => (
            <li
              key={key}
              className="pb-4 pl-4 border-l-2 relative before:absolute before:border-2 before:border-yellow-400 before:rounded-full"
            >
              <span className="text-lg font-medium">{item.label} :</span> {item.value}
            </li>
          ))}
        </ul>
        <span className="flex justify-center">
          <Link href={"/download/resume.pdf"}>
            <a target={"_blank"} onClick={handleGA} className="flex items-center text-xl font-medium bg-yellow-400 py-2 px-3 rounded-2xl hover:bg-yellow-500">
              <span className="mr-2 flex items-center justify-center">
                <FaDownload />
              </span>
              Download CV
            </a>
          </Link>
        </span>
      </section>
    </>
  );
}
export default Profile;
