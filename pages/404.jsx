import Link from "next/link";
import React from "react";
import Button from "../components/Button";

const error = () => {
  return (
    <section className="FADECONTAINER MARQUEECONTAINER flex-col md:flex-row gap-10 justify-center items-center">
      <div className="FADE flex flex-col gap-1 items-end text-right">
        <h1 className="text-9xl font-thin">404</h1>
        <hr className="w-full border border-slate-700" />
        <p className="max-w-[10rem] font-extralight">
          This page does not exist.
        </p>
        <Link href="/" passHref>
          <a>
            <Button>Home</Button>
          </a>
        </Link>
      </div>
      <iframe
        src="https://giphy.com/embed/VwoJkTfZAUBSU"
        width="332"
        height="480"
        frameBorder="0"
        className="pointer-events-none rounded MARQUEE"
        data-speed="-0.2"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default error;
