import Link from "next/link";
import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Nav = () => {
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
    <nav className="container left-1/2 -translate-x-1/2 z-50 fixed border-b border-slate-800 bg-slate-900 flex justify-between px-10 md:px-20 py-3 items-center">
      <span className="font-black">MAD</span>
      <div className="hidden sm:flex gap-5">
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
        <Link href="/about" passHref>
          <a>About</a>
        </Link>
        <Link href="/services" passHref>
          <a>Services</a>
        </Link>
        <Link href="/contact" passHref>
          <a>Contact</a>
        </Link>
      </div>
      <Link href="/">
        <button className="px-5 py-2 bg-slate-50 rounded-lg text-slate-900">
          Say Hello
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
