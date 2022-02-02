import Head from "next/head";
import { Me } from "../section/me";
import { Services } from "../section/services";
import { Skill } from "../section/skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | About</title>
      </Head>
      <section className="about mt-3 shadow shadow-slate-400 rounded-2xl my-2">
        <Me />
        <Services />
        <Skill />
      </section>
    </>
  );
}
