import Profile from "../components/profile";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="wrapper">
        <aside>
          <Profile />
        </aside>
        <main>
          <header>Header Section</header>
          <Component {...pageProps} />
          <footer>footer section</footer>
        </main>
      </div>
    </>
  );
}

export default MyApp;
