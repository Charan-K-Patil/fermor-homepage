"use client";
import { useState } from "react";
import Logo from "./Logo";
import { NAV } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#top" aria-label="Fermor home" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <nav id="primary-nav" className={`nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a className="nav-login" href="https://fermor.in/sign-in">Log in</a>
        </nav>
        <div className="header-actions">
          <a className="btn btn-primary btn-sm" href="https://fermor.in/signup">Get started</a>
          <button
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
