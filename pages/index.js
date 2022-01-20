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
      <section className="about">
        <Me />
        <Services />
        <Skill />
      </section>
    </>
  );
}
