import Head from "next/head";
import useSWR from "swr";

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

function Work() {
  const { data, error } = useSWR("work", fetcher);
  if (error) return `An error has occured`;
  if (!data) return `loading..`;
  return (
    <>
      <Head>
        <title>Portfolio | Work</title>
      </Head>
      <section className="work">
        <h2 className="title">My Work</h2>
        <div className="row">{console.log(data)}</div>
      </section>
    </>
  );
}
export default Work;
