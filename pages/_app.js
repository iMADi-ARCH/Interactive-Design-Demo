import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer";
import useAnimation from "../components/useAnimation";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  useAnimation();

  return (
    <div className="relative z-0 bg-slate-900 overflow-hidden ">
      <Head>
        <title>Aditya Nandan - Web Designer</title>
        <meta
          name="description"
          content="Hi! I am Aditya, and I design unique experiences worth remembering"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Nav />
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
