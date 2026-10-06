import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { workingProcess, services } from "@/content/site";
import { Arrow } from "@/components/Icons";
export { Arrow };
export function Meta({ title, description, path = "/" }) {
  const url = "https://www.jessecodes.co.za" + path;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Jesse Codes" />
      <meta name="twitter:card" content="summary" />
      {process.env.NEXT_PUBLIC_NOINDEX === "true" && (
        <meta name="robots" content="noindex,nofollow" />
      )}
    </Head>
  );
}
export function Button({ href, children, secondary = false }) {
  return (
    <Link className={"button " + (secondary ? "secondary" : "")} href={href}>
      {children}
      <Arrow />
    </Link>
  );
}
export function TextLink({ href, children }) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <Arrow />
    </Link>
  );
}
export function PageIntro({ label, title, children }) {
  return (
    <header className="page-intro container" data-reveal="up">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      {children && <div className="intro-copy">{children}</div>}
    </header>
  );
}
export function ProjectCard({ project, index }) {
  const href = "/work/" + project.slug;
  return (
    <article
      className={"project-card " + project.color}
      data-reveal="up"
      style={{ "--reveal-delay": (index % 2) * 100 + "ms" }}
    >
      <Link
        href={href}
        className="project-visual"
        aria-label={"Explore " + project.title}
      >
        <span className="project-number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.image ? (
          <div
            className={
              project.imageStyle === "presentation"
                ? "project-presentation"
                : "browser-frame"
            }
          >
            {project.imageStyle !== "presentation" && (
              <div className="browser-bar" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            )}
            <Image
              src={project.image}
              alt={project.alt}
              width={project.width}
              height={project.height}
              sizes="(max-width: 767px) 90vw, 55vw"
              className="project-image"
            />
          </div>
        ) : (
          <div className="project-title-visual">
            <span>{project.type}</span>
            <strong>{project.title}</strong>
            <div>
              {project.includes.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        )}
        <span className="visual-arrow" aria-hidden="true">
          <Arrow />
        </span>
      </Link>
      <div className="project-info">
        <p className="project-type">
          {project.type}, {project.role}
        </p>
        <h3>
          <Link href={href}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        <TextLink href={href}>Explore the project</TextLink>
      </div>
    </article>
  );
}
export function ServiceList({ expanded = false }) {
  return (
    <div className="service-list">
      {services.map((service, index) => (
        <article
          key={service.title}
          className="service-row"
          data-reveal="left"
          style={{ "--reveal-delay": index * 70 + "ms" }}
        >
          <span className="index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            {expanded && (
              <>
                <p className="service-examples">{service.examples}</p>
                <TextLink href="/contact">Discuss this service</TextLink>
              </>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
export function Process() {
  return (
    <ol className="process-list">
      {workingProcess.map(([title, text], index) => (
        <li
          key={title}
          data-reveal="up"
          style={{ "--reveal-delay": index * 90 + "ms" }}
        >
          <span className="index">{String(index + 1).padStart(2, "0")}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ol>
  );
}
export function ClosingCTA() {
  return (
    <section className="closing container" data-reveal="up">
      <p className="eyebrow">A conversation is a good place to start</p>
      <div className="closing-row">
        <h2>
          Have a project
          <br />
          in mind?
        </h2>
        <div>
          <p>
            Tell me what you’re building, what needs improving and where you
            need support.
          </p>
          <Button href="/contact">Let’s talk</Button>
        </div>
      </div>
    </section>
  );
}
