import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const useAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
      // desktop
      "(min-width: 800px)": function () {},
      // mobile
      "(max-width: 799px)": function () {},
      // all
      all: function () {
        // if (viewerRef.current) {
        //   canRot(viewerRef);
        // }
        parallax();
        fade();
        marquee();
      },
    });
  }, []);
  return null;
};

// function canRot(viewerRef) {
//   const canvas = viewerRef.current;
//   const context = canvas.getContext("2d");
//   canvas.width = 512;
//   canvas.height = 1080;

//   const frameCount = 120;
//   const currentFrame = (index) =>
//     `/assets/can/image-seq/${(index + 1).toString().padStart(4, "0")}.png`;

//   const images = [];
//   const canFrame = {
//     frame: 0,
//   };

//   for (let i = 0; i < frameCount; i++) {
//     const img = new Image();
//     img.src = currentFrame(i);
//     images.push(img);
//   }
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: canvas,
//       scrub: 0,
//       // pin: true,
//       // markers: true,
//     },
//     repeat: 2,
//   });
//   tl.to(canFrame, {
//     frame: frameCount - 1,
//     snap: "frame",
//     onUpdate: render,
//   });

//   images[0].onload = render;

//   function render() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.drawImage(images[canFrame.frame], 0, 0);
//   }
// }

function parallax() {
  const containers = gsap.utils.toArray(".PARALLAXCONTAINER");
  containers.forEach((container) => {
    const selector = gsap.utils.selector(container);

    selector(".PARALLAX").forEach((layer) => {
      const depth = layer.dataset.depth;
      gsap.to(layer, {
        y: `${100 * depth}%`,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });
    });

    selector(".PARALLAXBG").forEach((layer) => {
      // layer.style.backgroundImage = `url(${layer.dataset.src})`;
      layer.style.transform = "translateY(-50%)";
      // layer.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
      gsap.to(layer, {
        y: `100%`,
        // backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          scrub: true,
        },
      });
    });
    selector(".PARALLAXBGTOP").forEach((layer) => {
      layer.style.transform = "translateY(0px)";
      gsap.to(layer, {
        y: `50%`,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  });
}

function fade() {
  const containers = gsap.utils.toArray(".FADECONTAINER");
  containers.forEach((container) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    });

    const selector = gsap.utils.selector(container);

    selector(".FADE").forEach((layer) => {
      layer.style.opacity = "0";
      layer.style.transform = "translateY(100px)";
      tl.to(layer, { opacity: 1, y: 0 });
      tl.to(layer, { opacity: 0, y: -100, delay: 0 });
    });
  });
}

function marquee() {
  const containers = gsap.utils.toArray(".MARQUEECONTAINER");
  containers.forEach((container) => {
    const selector = gsap.utils.selector(container);

    selector(".MARQUEE").forEach((layer) => {
      const speed = layer.dataset.speed;
      const anim = gsap.to(layer, { x: `${100 * speed}%`, ease: "none" });
      ScrollTrigger.create({
        animation: anim,
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      });
    });
  });
}

export default useAnimation;
