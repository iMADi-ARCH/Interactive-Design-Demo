import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Footer from "../components/Footer";
import useAnimation from "../components/useAnimation";

function MyApp({ Component, pageProps }) {
  useAnimation();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const showAnim = gsap
      .from("nav", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  });

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

      <nav className="container left-1/2 -translate-x-1/2 z-50 fixed border-b border-slate-800 bg-slate-900 flex justify-between px-10 md:px-20 py-3 items-center">
        <span className="font-black">MAD</span>
        <div className="hidden sm:flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Link href="/">
          <button className="px-5 py-2 bg-slate-50 rounded-lg text-slate-900">
            Say Hello
          </button>
        </Link>
      </nav>
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
