import { useEffect, useRef } from "react";
import useAnimation from "../components/useAnimation";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export default function Home() {
  const viewer = useRef();

  useAnimation(viewer);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  return (
    <div>
      <main className="relative overflow-x-hidden">
        <section className="HEROCONTAINER PARALLAXCONTAINER FADECONTAINER MARQUEECONTAINER relative !overflow-visible">
          <div className="PARALLAXBGTOP absolute top-0 left-0 bottom-0 text-[120vh] leading-none text-slate-800/40 ">
            MAD
          </div>
          <div className="FADE z-10">
            <h1
              className="HEROTITLE MARQUEE text-9xl whitespace-nowrap font-black"
              data-speed="-0.5"
            >
              {"CREATIVE DESIGNER ● ".repeat(2)}
            </h1>
            <h2
              className="MARQUEE text-3xl text-slate-200 font-bold"
              data-speed="0.2"
            >
              This is a demo made by Aditya to showcase types of designs possible
              with gsap
            </h2>
          </div>
        </section>
        <section className="FADECONTAINER PARALLAXCONTAINER z-10 grid grid-cols-2">
          {/* <div className="PARALLAXBGTOP">
            <img src="/assets/pics/ride.jpg" />
          </div> */}
          <div className="FADE">
            <h1 className="z-10 text-6xl font-black">Parallax is Cool</h1>
            <h2 className="text-2xl text-slate-200 font-normal leading-loose">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-justify font-light leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sint, rerum laborum quos aperiam odit dolorem voluptates dolor
              accusamus molestiae ullam nam animi repellat non! Quod natus
              quibusdam beatae accusamus minus nostrum libero aspernatur omnis
              eligendi fugiat.
            </p>
          </div>
          <div className="grid grid-cols-2 h-full w-full p-10 grid-rows-4">
            <img
              src="/assets/pics/cat-and-mouse.jpg"
              alt=""
              className="PARALLAX row-start-1 row-end-4"
              data-depth="-0.2"
            />
            <img
              src="/assets/pics/cat-cute.png"
              alt=""
              className="PARALLAX row-start-2 row-end-5"
              data-depth="0.2"
            />
          </div>
        </section>
        <section className="FADECONTAINER PARALLAXCONTAINER z-10 grid grid-cols-2">
          {/* <div className="PARALLAXBGTOP">
            <img src="/assets/pics/ride.jpg" />
          </div> */}
          <div className="grid grid-cols-2 h-full w-full p-10 grid-rows-4">
            <img
              src="/assets/pics/cat-abstract.jpg"
              alt=""
              className="PARALLAX row-start-1 row-end-4"
              data-depth="-0.2"
            />
            <img
              src="/assets/pics/happybday.jpg"
              alt=""
              className="PARALLAX row-start-2 row-end-5"
              data-depth="0.2"
            />
          </div>
          <div className="FADE">
            <h1 className="z-10 text-6xl font-black">Parallax is Cool</h1>
            <h2 className="text-2xl text-slate-200 font-normal leading-loose">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-justify font-light leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sint, rerum laborum quos aperiam odit dolorem voluptates dolor
              accusamus molestiae ullam nam animi repellat non! Quod natus
              quibusdam beatae accusamus minus nostrum libero aspernatur omnis
              eligendi fugiat.
            </p>
          </div>
        </section>
        <section className="PARALLAXCONTAINER FADECONTAINER">
          <div className="PARALLAXBG">
            <img src="/assets/pics/windows.jpg" />
          </div>
          <canvas className="absolute -z-10" ref={viewer}></canvas>
          <div className="FADE text-slate-900  pr-96">
            <h1 className="z-10 text-6xl font-black">
              This is an image sequence
            </h1>
            <h2 className="text-2xl font-normal leading-loose">
              There are no Limits
            </h2>
            <p className="text-justify font-light leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sint, rerum laborum quos aperiam odit dolorem voluptates dolor
              accusamus molestiae ullam nam animi repellat non! Quod natus
              quibusdam beatae accusamus minus nostrum libero aspernatur omnis
              eligendi fugiat.
            </p>
          </div>
        </section>
      </main>

      <footer className="min-h-screen bg-black"></footer>
    </div>
  );
}
