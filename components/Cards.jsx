import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Button from "./Button";

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
    <Card className={`group justify-between ${className}`}>
      <div className="transition saturate-[0.25] group-hover:saturate-100 absolute inset-0 -right-60 pointer-events-none -bottom-24 -z-10 opacity-50">
        <Icon icon={iconifyText} width="100%" />
      </div>
      <div>
        <h1 className="text-xl font-semibold p-5 -z-20">{title}</h1>
        <hr className="border-slate-800 mx-5" />
        <p className="p-5">{children}</p>
      </div>
      {githubHref ? (
        <a
          href={githubHref}
          target="_blank"
          rel="noreferrer noopener"
          className="flex cursor-pointer justify-start overflow-visible group-hover:gap-3 items-center p-3 m-2 bg-slate-50 text-slate-900 rounded-full self-end justify-self-end place-self-end"
        >
          <Icon icon="akar-icons:github-fill" width="2rem" />
          <p className="pointer-events-none w-0 p-0 m-0 font-medium transition -translate-y-10 opacity-0 group-hover:inline group-hover:opacity-100 group-hover:translate-y-0 group-hover:w-fit">
            Github
          </p>
        </a>
      ) : (
        ""
      )}
    </Card>
  );
};

const ServiceCard = ({
  title,
  description,
  price,
  delivery,
  revisions,
  featuresList,
}) => {
  return (
    <Card>
      <div className="flex p-5 justify-between items-center">
        <h1 className="text-xl font-semibold -z-20">{title}</h1>
        <span>{price}</span>
      </div>
      <hr className="border-slate-800 mx-5" />
      <p className="p-5">{description}</p>
      <div className="flex p-5 font-semibold justify-between items-center">
        <span className="flex items-center gap-2">
          <Icon width="1.5rem" icon="ant-design:clock-circle-outlined" />{" "}
          {delivery} delivery
        </span>
        <hr className="border-slate-800" />
        <span className="flex items-center gap-2">
          <Icon width="1.5rem" icon="ant-design:reload-outlined" /> {revisions}{" "}
          revisions
        </span>
      </div>
      <hr className="border-slate-800 mx-5" />
      <ul className="p-5">
        {featuresList.map((feature, index) => (
          <li key={index} className="flex gap-2 items-center justify-start">
            <Icon width="2rem" icon="ant-design:check-outlined" />
            <p>{feature}</p>
          </li>
        ))}
      </ul>
      <div className="p-5 self-end">
        <Button>Continue {price}</Button>
      </div>
    </Card>
  );
};

export { Card, SkillCard, ServiceCard };
