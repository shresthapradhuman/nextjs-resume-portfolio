import Header from "../components/header";
import Profile from "../components/profile";
import "../styles/global.scss";
import Head from "next/head";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let path = router.asPath;
  let pathCapitalize = [];
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
        <meta name="description" content="Resume Portofolio Bloging Website" />
        <link rel="icon" href="/favicon.ico" />
        <title>{`Resume Portfolio | ${pathCapitalize.join(" | ")}`}</title>
      </Head>
      <div className="w-full xl:w-9/12 px-5 xl:mx-auto mt-5 lg:mt-14 lg:flex lg:justify-between">
        <aside className="mb-5 lg:basis-4/12 xl:basis-3/12">
          <Profile />
        </aside>
        <main className="lg:basis-8/12 lg:ml-5 xl:basis-9/12">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default MyApp;
