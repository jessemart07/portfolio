import Image from "next/image";
import { Arrow, ClosingCTA, Meta, PageIntro, TextLink } from "@/components/Site";
import { projects } from "@/content/site";
export default function CaseStudy({ project }) {
  return (
    <>
      <Meta
        title={project.title + " | Jesse Codes"}
        description={project.summary}
        path={"/work/" + project.slug}
      />
      <div className="container breadcrumb">
        <TextLink href="/work">Back to all work</TextLink>
      </div>
      <PageIntro label={project.category} title={project.title}>
        <p>{project.summary}</p>
      </PageIntro>
      <div className="container case-content">
        <dl
          className={
            "project-facts" +
            (project.developmentEnvironment ? " project-facts--four" : "")
          }
        >
          <div>
            <dt>Project type</dt>
            <dd>{project.type}</dd>
          </div>
          <div>
            <dt>My role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>{project.technologyLabel || "Built with"}</dt>
            <dd>{project.technologies.join(", ")}</dd>
          </div>
          {project.developmentEnvironment && (
            <div>
              <dt>Development environment</dt>
              <dd>{project.developmentEnvironment}</dd>
            </div>
          )}
        </dl>
        {project.image && (
          <figure className={"case-image " + project.color}>
            <a
              href={project.image}
              target="_blank"
              rel="noreferrer"
              aria-label={
                "View full image of " + project.title + " (opens in a new tab)"
              }
            >
              <Image
                src={project.image}
                alt={project.alt}
                width={project.width}
                height={project.height}
                sizes="(max-width: 767px) 90vw, 1100px"
                preload
              />
            </a>
            <figcaption>
              {project.caption}{" "}
              <a href={project.image} target="_blank" rel="noreferrer">
                View full image <Arrow />
              </a>
            </figcaption>
          </figure>
        )}
        {project.captures && (
          <div className="capture-links">
            {project.captures.map((capture) => (
              <a
                key={capture.href}
                href={capture.href}
                target="_blank"
                rel="noreferrer"
              >
                {capture.label} <Arrow />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        )}
        <section className="case-section">
          <h2>My contribution</h2>
          <p>{project.contribution}</p>
        </section>
        {project.redevelopment && (
          <section
            className="case-redevelopment"
            aria-labelledby="redevelopment-title"
          >
            <h2 id="redevelopment-title">
              From the existing platform to Azure
            </h2>
            <ol className="redevelopment-stages">
              {project.redevelopment.map((stage, index) => (
                <li
                  key={stage.label}
                  data-reveal="up"
                  style={{ "--reveal-delay": index * 90 + "ms" }}
                >
                  <span className="eyebrow">{stage.label}</span>
                  <h3>{stage.value}</h3>
                  <p>{stage.description}</p>
                </li>
              ))}
            </ol>
          </section>
        )}
        <section className="case-section">
          <h2>What this project includes</h2>
          <ul>
            {project.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <div className="case-back">
          <TextLink href="/work">Explore more work</TextLink>
        </div>
      </div>
      <ClosingCTA />
    </>
  );
}
export function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}
export function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  return project ? { props: { project } } : { notFound: true };
}
