import Header from "../components/header";
import Profile from "../components/profile";
import "../styles/global.scss";
import "../styles/profile.scss";
import "../styles/header.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>
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
