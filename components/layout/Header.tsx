"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";

function LogoMark() {
  return (
    <span className="flex items-center gap-3" aria-hidden>
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
        <span className="absolute left-0.5 top-1 h-5 w-3 rotate-12 bg-emerald-600/90" />
        <span className="absolute right-1 bottom-1 h-5 w-3 -rotate-6 bg-teal-600/90" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.65rem] font-semibold tracking-[0.25em] text-stone-500">
          NORDSTAR
        </span>
        <span className="text-sm font-semibold tracking-[0.12em] text-stone-900">
          CONSTRUCTION
        </span>
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-stone-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link
          href="#home"
          className="group flex items-center gap-1 outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 focus-visible:ring-offset-2"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
        </Link>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-stone-200 bg-white text-stone-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-stone-800 transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full bg-stone-800 transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-full bg-stone-800 transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-stone-200 bg-white md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 sm:px-8">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-sm font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
