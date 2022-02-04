import Header from "../components/header";
import Profile from "../components/profile";
import "../styles/global.scss";
import Head from "next/head";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let path = router.asPath;
  let pathCapitalize = [];
  let breadcrumbs = path.replace("/", "").split("/");
  if (path.replace("/", "") !== "") {
    let pathArray = path.replace("/", "").split("/");
    pathArray.map((item) => {
      pathCapitalize.push(item[0].toUpperCase() + item.slice(1));
    });
  } else {
    pathCapitalize.push("About Me");
  }
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Shrestha Pradhuman Portfolio, Tutorial Blog for HTML, CSS, SCSS, JavaScript, Tailwindcss, Bootstrap, React, Redux, NextJS, NodeJS, PHP, MYSQL, SQL, NPM, GIT, Docker, Web Hosting, Magento, Wordpress, etc."
        />
        <link rel="icon" href="/favicon.ico" />
        <title>{`Resume Portfolio | ${pathCapitalize.join(" | ")}`}</title>
      </Head>
      <div className="w-full xl:w-9/12 px-5 xl:mx-auto mt-5 lg:mt-14 lg:flex lg:justify-between">
        <aside className="mb-5 lg:basis-4/12 xl:basis-3/12">
          <Profile />
        </aside>
        <main className="lg:basis-8/12 lg:ml-5 xl:basis-9/12">
          <Header />
          <div className="my-2 opacity-90 bg-white px-2">
            <Link href="/">
              <a
                className={`capitalize ${path == "/" ? "text-orange-500" : ""}`}
                rel="noopener"
              >
                home
              </a>
            </Link>
            {breadcrumbs.map((item, key) => (
              <Link
                href={`/${key > 0 ? breadcrumbs[key - 1] + "/" : ""}${item}`}
                key={key}
              >
                <a
                  className=" capitalize last:text-orange-500"
                  rel="noopener"
                  aria-label={`${item !== "" ? item : "blank"}`}
                >
                  {`${item !== "" ? " /" : ""} ${item}`}
                </a>
              </Link>
            ))}
          </div>
          <Component {...pageProps} />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default MyApp;
