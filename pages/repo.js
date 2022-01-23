import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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

function Repo() {
  const { data, error } = useSWR("work", fetcher);
  if (error) return `An error has occured`;
  if (!data) return `loading..`;
  return (
    <>
      <Head>
        <title>Portfolio | Work</title>
      </Head>
      <section className="repo">
        <h2 className="title">My Repository</h2>
        <div className="row">
          {console.log(data)}
          {data.map((item, key) => (
            <Link href={item.html_url} key={key}>
              <a className="card">
                <div className="card-body">
                  <h2>{item.name.slice(0, 20)}</h2>
                  <p>{item.description.slice(0, 200)}</p>
                  <span>{item.language}</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
export default Repo;
