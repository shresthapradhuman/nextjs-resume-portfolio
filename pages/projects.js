import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import * as gtag from "../lib/gtag";

const fetcher = async () => {
  const response = await fetch(
    "https://api.github.com/users/shresthapradhuman/repos",
    {
      headers: {
        Authorization: "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",
      },
    }
  );
  const data = await response.json();
  return data;
};

function Projects() {
  const [score, setScore] = useState(0);
  const handleGA = () => {
    setScore(score++);

    gtag.event({
      action: "github repository visited",
      category: "score",
      label: "score",
      value: score,
    });
  };
  const { data, error } = useSWR("work", fetcher);
  if (error) return `An error has occured`;
  if (!data) return `loading..`;
  return (
    <>
      <section className="mt-3 shadow shadow-slate-400 rounded-2xl my-2 bg-white py-10 px-5">
        <h2 className="title text-2xl pb-2 mb-5">My Project</h2>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 md:grid-cols-2">
          {data.map((item, key) => (
            <Link href={item.html_url} key={key}>
              <a
                className="shadow shadow-slate-400"
                target="_blank"
                onClick={handleGA}
              >
                <div className="p-2">
                  <h2 className="text-lg capitalize text-center py-1">
                    {item.name.slice(0, 20)}
                  </h2>
                  <p className="font-light mb-2 h-32">
                    {item.description.slice(0, 100)}
                  </p>
                  <span className="block text-right">{item.language}</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
export default Projects;
