import Header from "../components/header";
import Profile from "../components/profile";
import "../styles/global.scss";
import "../styles/profile.scss";
import "../styles/header.scss";
import "../styles/blog.scss";
import "../styles/post.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
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
          <footer>footer section</footer>
        </main>
      </div>
    </>
  );
}

export default MyApp;
