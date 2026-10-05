import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { contactEmail } from "@/content/site";
import { MotionSurface, MotionToggle, RouteCurtain } from "@/components/Motion";
export default function Layout({ children }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const menu = useRef(null);
  useEffect(() => {
    const closeMenu = () => setOpen(false);
    router.events.on("routeChangeComplete", closeMenu);
    router.events.on("hashChangeComplete", closeMenu);
    return () => {
      router.events.off("routeChangeComplete", closeMenu);
      router.events.off("hashChangeComplete", closeMenu);
    };
  }, [router.events]);
  function handleKey(event) {
    if (event.key === "Escape") {
      setOpen(false);
      toggle.current?.focus();
    }
    if (
      event.key === "Tab" &&
      open &&
      window.matchMedia("(max-width:767px)").matches
    ) {
      const links = menu.current?.querySelectorAll("a");
      if (event.shiftKey && event.target === toggle.current) {
        event.preventDefault();
        links[links.length - 1]?.focus();
      } else if (!event.shiftKey && event.target === links[links.length - 1]) {
        event.preventDefault();
        toggle.current?.focus();
      }
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header" onKeyDown={handleKey}>
        <div className="container header-inner">
          <Link href="/" aria-label="Jesse Codes home" className="brand">
            <Image
              src="/logo-light.svg"
              width={161}
              height={35}
              alt="Jesse Codes"
              preload
            />
          </Link>
          <button
            className="menu-toggle"
            ref={toggle}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}{" "}
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
          <nav
            id="primary-nav"
            aria-label="Main navigation"
            ref={menu}
            className={open ? "is-open" : ""}
          >
            {["Work", "Services", "About"].map((label) => (
              <Link
                key={label}
                href={"/" + label.toLowerCase()}
                aria-current={
                  router.pathname.startsWith("/" + label.toLowerCase())
                    ? "page"
                    : undefined
                }
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="nav-cta"
              aria-current={router.pathname === "/contact" ? "page" : undefined}
            >
              Discuss a project <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
        <noscript>
          <style>
            {
              ".menu-toggle{display:none!important}@media(max-width:767px){#primary-nav{display:flex!important;position:static!important;flex-wrap:wrap}.header-inner{flex-wrap:wrap}}"
            }
          </style>
        </noscript>
      </header>
      <RouteCurtain />
      <main id="main" tabIndex={-1}>
        <MotionSurface>{children}</MotionSurface>
      </main>
      <footer className="site-footer container">
        <div>
          <Link href="/" className="footer-brand">
            Jesse Codes<span aria-hidden="true">.</span>
          </Link>
          <p>
            Independent software engineering.
            <br />
            Jeffreys Bay, South Africa.
          </p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/jessemart07"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/jesse-martin-986971151"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href={"mailto:" + contactEmail}>Email ↗</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Jesse Codes</span>
          <MotionToggle />
        </div>
      </footer>
    </>
  );
}
