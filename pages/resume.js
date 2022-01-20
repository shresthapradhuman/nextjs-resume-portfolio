import Head from "next/head";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { working, education } from "../data/setting";

export default function resume() {
  return (
    <>
      <Head>
        <title>Portfolio | Resume</title>
      </Head>
      <section className="resume">
        <h1 className="title">My Resume</h1>
        <div className="row">
          <ul className="experience">
            <li>
              <span>
                <FaBriefcase />
              </span>
              Working History
            </li>
            {working.map((item, key) => (
              <li key={key}>
                <h3>{item.work}</h3>
                <span>{`${item.from} ~ ${item.to}`}</span>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
          <ul className="education">
            <li>
              <span>
                <FaGraduationCap />
              </span>
              Education History
            </li>
            {education.map((item, key) => (
              <li key={key}>
                <h3>{item.school}</h3>
                <span>{`${item.from} ~ ${item.to}`}</span>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
