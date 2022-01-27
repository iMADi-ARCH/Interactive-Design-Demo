import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 gap-10 container mx-auto border-t border-slate-800 bg-slate-900 px-10 md:px-20 py-20 mt-10 items-center">
      <span className="font-black text-4xl">MAD</span>
      <div className="flex flex-col justify-evenly md:flex-row gap-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <p className="col-span-2 flex items-center justify-center">
        &copy; MAD 2022
      </p>
    </footer>
  );
};

export default Footer;
