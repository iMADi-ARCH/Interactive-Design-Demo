import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Card = ({ className, children }) => {
  return (
    <div
      className={`border z-0 flex focus:ring-1 flex-col transition-transform relative overflow-hidden hover:scale-105 border-slate-800 bg-slate-900 min-w-[10rem] min-h-[10rem] max-w-sm rounded shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

const SkillCard = ({ title, iconifyText, githubHref, className, children }) => {
  return (
    <Card className={`justify-between ${className}`}>
      <div className="absolute inset-0 -right-60 pointer-events-none -bottom-24 -z-10 opacity-20">
        <Icon icon={iconifyText} width="100%" />
      </div>
      <div>
        <h1 className="text-xl font-semibold p-5 -z-20">{title}</h1>
        <hr className="border-slate-800 mx-5" />
        <p className="p-5">{children}</p>
      </div>
      <a
        href={githubHref}
        target="_blank"
        className="group flex cursor-pointer justify-start overflow-visible hover:gap-3 items-center p-3 m-2 bg-slate-300 text-slate-900 rounded-full self-end justify-self-end place-self-end"
      >
        <Icon icon="akar-icons:github-fill" width="2rem" />
        <p className="w-0 p-0 m-0 font-medium transition -translate-y-10 opacity-0 group-hover:inline group-hover:opacity-100 group-hover:translate-y-0 group-hover:w-fit">
          Github
        </p>
      </a>
    </Card>
  );
};

export { Card, SkillCard };
