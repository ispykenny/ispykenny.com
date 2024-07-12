"use client";
import Link from "next/link";

import {
  useGetThemeSettings,
  useSetThemeSettings,
} from "@/providers/ThemeProvider";
import { useRef, useState } from "react";

import { ActionLink, Container } from "@/components";
import { useRouter } from "next/navigation";

export const Nav = () => {
  const theme = useGetThemeSettings();
  const navLinks = useRef<HTMLUListElement>(null);
  const linkss = useRef<any>();
  const setTheme = useSetThemeSettings();
  const [translationPosition, setTranslationPosition] = useState({});
  const router = useRouter();

  const links = [
    {
      name: "Home",
      target: "",
      href: "/",
    },
    {
      name: "About",
      target: "",
      href: "/about",
    },
    {
      name: "Blogs",
      target: "",
      href: "/blogs",
    },
    {
      name: "Schedule a call",
      target: "",
      href: "/connect",
    },
  ];

  return (
    <header className="fixed w-full left-0  top-5 z-10">
      <Container classes="mt-4 bg-primary-color hasShadow py-4 lg:py-3 px-4 lg:px-10 lg:flex lg:justify-between lg:items-center rounded-lg lg:rounded-2xl">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-base md:text-lg font-bold">
            Kenny
          </Link>
          <button
            className="rounded lg:hidden font-bold flex flex-col justify-around items-center h-8 w-8"
            onClick={() => {
              setTheme("isMenuOpen", !theme.isMenuOpen);
            }}
          >
            <span className="sr-only">
              {theme.isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            <span className="rounded inline-block h-[3px] w-4/5 bg-black mt-1"></span>
            <span className="rounded inline-block h-[3px] w-4/5 bg-black"></span>
            <span className="rounded inline-block h-[3px] w-4/5 bg-black mb-1"></span>
          </button>
        </div>
        <div
          className={`
          ${theme.isMenuOpen ? "flex" : "hidden"}
        flex flex-col gap-4 pt-4 lg:p-0 lg:!flex lg:flex-row lg:items-center lg:gap-10`}
        >
          <div className="relative">
            <ul
              ref={navLinks}
              className="flex flex-col gap-5 lg:gap-10 lg:flex-row font-semibold"
            >
              {links.map((link) => (
                <li key={link.name} ref={linkss}>
                  <Link
                    target={link.target}
                    onClick={(e) => {
                      const leftOffSet = e.currentTarget.offsetLeft + "px";
                      const width = e.currentTarget.offsetWidth + "px";
                      setTranslationPosition({
                        transform: `translateX(${leftOffSet})`,
                        width: width,
                      });
                    }}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ActionLink href="/contact" theme="primary" text="Contact" />
        </div>
      </Container>
    </header>
  );
};
