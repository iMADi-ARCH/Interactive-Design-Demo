import { useEffect, useRef } from "react";
import useAnimation from "../components/useAnimation";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export default function Home() {
  const viewer = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  return (
    <div>
      <main className="relative ">
        <section className="PARALLAXCONTAINER FADECONTAINER MARQUEECONTAINER relative !overflow-visible">
          <div className="PARALLAXBGTOP absolute left-0 bottom-1/2 text-[100vh] font-black leading-none text-slate-800/40 ">
            MAD
          </div>
          <div className="FADE z-10">
            {/* Desktop Version */}
            <h1
              className="MARQUEE hidden md:block text-6xl md:text-7xl lg:text-8xl whitespace-nowrap font-black"
              data-speed="-0.5"
            >
              {"CREATIVE DESIGNER ● ".repeat(2)}
            </h1>
            {/* Mobile Version */}
            <h1
              className="MARQUEE block md:hidden text-5xl sm:text-8xl font-black"
              data-speed="-0.5"
            >
              CREATIVE DESIGNER
            </h1>
            <h2
              className="MARQUEE text-xl md:text-3xl whitespace-pre-wrap text-slate-200 font-bold"
              data-speed="-0.2"
            >
              Hi! I am Aditya, and I design unique experiences worth remembering
            </h2>
          </div>
        </section>

        <section className="FADECONTAINER PARALLAXCONTAINER z-10 grid gap-10 grid-cols-1 justify-items-center lg:grid-cols-2">
          <div className="FADE section-text">
            <h1 className="section-heading">I am a pixel perfectionist</h1>
            {/* <h2 className="text-2xl text-slate-200 font-normal">
            </h2> */}
            <p className="text-justify font-light leading-relaxed">
              Every component in every website must to follow certain
              proportions.
            </p>
          </div>
          <div className="section-gallery">
            <img
              src="/assets/pics/cat-and-mouse.jpg"
              alt=""
              className="PARALLAX"
              data-depth="-0.2"
            />
            <img
              src="/assets/pics/cat-cute.png"
              alt=""
              className="PARALLAX"
              data-depth="0.2"
            />
          </div>
        </section>
        <section className="FADECONTAINER PARALLAXCONTAINER z-10 grid gap-10 grid-cols-1 justify-items-center lg:grid-cols-2">
          <div className="section-gallery left-0">
            <img
              src="/assets/pics/cat-abstract.jpg"
              alt=""
              className="PARALLAX"
              data-depth="-0.2"
            />
            <img
              src="/assets/pics/happybday.jpg"
              alt=""
              className="PARALLAX"
              data-depth="0.2"
            />
          </div>
          <div className="FADE section-text">
            <h1 className="section-heading">
              I create websites worth remembering
            </h1>
            {/* <h2 className="text-2xl text-slate-200 font-normal leading-loose"></h2> */}
            <p className="text-justify font-light leading-relaxed">
              You are going to visit this site again.... right?
            </p>
          </div>
        </section>
        <section className="PARALLAXCONTAINER overflow-hidden FADECONTAINER">
          <div className="PARALLAXBG">
            {/* <img src="/assets/pics/windows.jpg" /> */}
            <Image
              src="/assets/pics/windows.jpg"
              alt="abstract image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <canvas className="absolute -z-10" ref={viewer}></canvas>
          <div className="FADE text-slate-900">
            <h1 className="section-heading">I am a Learner</h1>
            <h2 className="text-2xl font-normal">
              I may make mistakes... But only once.
            </h2>
            <p className="text-justify font-light leading-relaxed">
              I try multiple methods of doing a task then choose the best one
              based on 4 factors - Performance, Minimalism, Readability, and
              Beautifulness
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
