import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="description" content="resume-portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="about">About Section</section>
    </>
  );
}
