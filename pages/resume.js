import Head from "next/head";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { working, education } from "../data/setting";
import { Skill } from "../section/skills";

export default function Resume() {
  return (
    <>
      <section className="my-5 mt-3 shadow shadow-slate-400 rounded-2xl py-10 px-5 bg-white">
        <h1 className="title pb-2 mb-5 text-2xl font-medium">My Resume</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <ul className="resume py-5 pr-0 pl-8">
            <li className="border-l-2 text-2xl flex items-center relative pb-10 pl-8">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 mr-3 -ml-16">
                <FaBriefcase size="28px" />
              </span>
              Working History
            </li>
            {working.map((item, key) => (
              <li
                key={key}
                className="border-l-2  relative before:absolute pb-5 pl-8 before:w-4 before:h-4 before:border-2 before:border-yellow-400 before:rounded-full before:bg-white last:border-0 "
              >
                <p className="text-lg font-medium mb-1">{item.work}</p>
                <p className="font-medium block mb-1">{`${item.from} ~ ${item.to}`}</p>
                <p className="font-light">{item.description}</p>
              </li>
            ))}
          </ul>
          <ul className="resume py-5 pr-0 pl-8">
            <li className="border-l-2 text-2xl flex items-center  relative pb-10 pl-8">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 mr-3 -ml-16">
                <FaGraduationCap size="28px" />
              </span>
              Education History
            </li>
            {education.map((item, key) => (
              <li
                key={key}
                className="border-l-2 relative before:absolute pb-5 pl-8 before:w-4 before:h-4 before:border-2 before:border-yellow-400 before:rounded-full before:bg-white last:border-0 "
              >
                <p className="text-lg font-medium mb-1">{item.school}</p>
                <p className="font-medium block mb-1">{`${item.from} ~ ${item.to}`}</p>
                <p className="font-light">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <Skill />
      </section>
    </>
  );
}
