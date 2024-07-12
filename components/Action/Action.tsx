"use client";
import Link from "next/link";
import { ReactNode } from "react";

const globalStyles = `font-bold flex items-center justify-center shadow-2xl shadow-blue-600/60 rounded-lg px-10 py-4 min-w-[180px] text-center outline-brand-color focus:outline-offset-[6px]`;

const getTheme = (theme: "primary" | "secondary") => {
  switch (theme) {
    case "primary":
      return `${globalStyles} bg-brand-color text-white`;
    case "secondary":
      return `${globalStyles} bg-white text-slate-600`;
  }
};

type ActionProps = {
  onClick?: () => void;
  className?: string;
  theme: "primary" | "secondary";
  type: "button" | "submit";
  text: string;
  icon?: ReactNode;
  disabled?: boolean;
};

const ActionButton = ({
  onClick,
  className,
  theme,
  type,
  text,
  icon,
  disabled = false,
}: ActionProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`w-auto ${getTheme(theme)} ${className ? className : ""}`}
    >
      {text}
      {icon && icon}
    </button>
  );
};

type LinkProps = {
  href: string;
  className?: string;
  theme: "primary" | "secondary";
  isExternal?: boolean;
  text: string;
  icon?: ReactNode;
};

const ActionLink = ({
  href,
  className,
  theme,
  isExternal,
  text,
  icon,
}: LinkProps) => {
  return (
    <Link
      href={href}
      className={`${getTheme(theme)} ${className ? className : ""} ${
        icon ? "gap-1" : ""
      }`}
      target={isExternal ? "_blank" : ""}
    >
      {text}
      {icon && icon}
    </Link>
  );
};

export { ActionButton, ActionLink };
