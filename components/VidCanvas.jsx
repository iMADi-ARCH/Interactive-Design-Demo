import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const VidCanvas = ({
  folderPath,
  ext,
  totalFrames,
  width,
  height,
  className,
  end,
}) => {
  const canvasEl = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const canvas = canvasEl.current;
    const context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    const frameCount = totalFrames;
    const currentFrame = (index) =>
      `${folderPath}/${(index + 1).toString().padStart(4, "0")}.${ext}`;

    const images = [];
    const canFrame = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const canvasStyle = window.getComputedStyle(canvas);
    // if (!canvas.width) canvas.width = parseInt(canvasStyle.width);
    // if (!canvas.height) canvas.height = parseInt(canvasStyle.height);
    if (!canvas.width) canvas.width = images[0].width;
    if (!canvas.height) canvas.height = images[0].height;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: canvas,
        scrub: 0.1,
        pin: true,
        start: "top top",
        end: `${end ? end : "bottom"} top`,
        markers: true,
      },
    });
    tl.to(canFrame, {
      frame: frameCount - 1,
      snap: "frame",
      onUpdate: render,
    });

    images[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        images[canFrame.frame],
        0,
        0,
        canvas.width,
        canvas.height
      );
    }
  }, []);
  return <canvas className={className} ref={canvasEl}></canvas>;
};

export default VidCanvas;
