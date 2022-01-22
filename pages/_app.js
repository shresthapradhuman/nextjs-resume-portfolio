import Header from "../components/header";
import Profile from "../components/profile";
import "../styles/global.scss";
import "../styles/profile.scss";
import "../styles/header.scss";
import "../styles/blog.scss";
import "../styles/post.scss";
import "../styles/about.scss";
import "../styles/circle.scss";
import "../styles/star.scss";
import "../styles/resume.scss";
import "../styles/contact.scss";
import Head from "next/head";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
      </Head>
      <div className="wrapper">
        <aside>
          <Profile />
        </aside>
        <main>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default MyApp;
