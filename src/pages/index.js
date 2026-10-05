import Image from "next/image";
import { MotionToggle, NetworkField } from "@/components/Motion";
import {
  Button,
  ClosingCTA,
  Meta,
  Process,
  ProjectCard,
  ServiceList,
  TextLink,
} from "@/components/Site";
import { introduction, projects } from "@/content/site";
export default function Home() {
  return (
    <>
      <Meta
        title="Jesse Martin | Web & Mobile Software Engineer"
        description="Independent software engineer in South Africa building web applications, mobile apps and business systems. Explore my work and discuss your project."
      />
      <section className="hero container">
        <NetworkField />
        <div className="portrait-hero">
          <div className="portrait-introduction">
            <p className="eyebrow" data-reveal="down">
              Jesse Martin, independent software engineer
            </p>
            <h1 data-reveal="down" style={{ "--reveal-delay": "90ms" }}>
              Software built
              <br />
              around <em>your business.</em>
            </h1>
            <div
              className="hero-copy"
              data-reveal="up"
              style={{ "--reveal-delay": "190ms" }}
            >
              <p>
                I help businesses build and improve web applications, mobile
                apps and internal systems, from the first requirements through
                to launch and ongoing development.
              </p>
              <div className="hero-actions">
                <Button href="/contact">Discuss a project</Button>
                <TextLink href="#selected-work">Explore my work</TextLink>
              </div>
            </div>
            <p
              className="portrait-location"
              data-reveal="up"
              style={{ "--reveal-delay": "270ms" }}
            >
              Based in Jeffreys Bay, South Africa.
              <br />
              Building software since 2018.
            </p>
          </div>
          <figure
            className="hero-portrait"
            data-reveal="left"
            style={{ "--reveal-delay": "160ms" }}
          >
            <div className="portrait-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="portrait-frame">
              <Image
                src="/portraits/jesse-martin.webp"
                alt="Jesse Martin, independent software engineer"
                width={869}
                height={948}
                sizes="(max-width: 767px) 90vw, (max-width: 1023px) 40vw, 460px"
                preload
              />
            </div>
            <figcaption>
              Independent by choice. Collaborative by nature.
            </figcaption>
          </figure>
        </div>
        <div className="hero-foot">
          <span>Working remotely with businesses and product teams.</span>
          <div className="hero-motion-controls">
            <MotionToggle />
            <span className="scroll-cue" aria-hidden="true">
              Scroll to explore <b>↓</b>
            </span>
          </div>
        </div>
      </section>
      <section className="section container" id="selected-work">
        <div className="section-heading" data-reveal="up">
          <div>
            <p className="eyebrow">01 Selected work</p>
            <h2>
              A few things
              <br />
              I’ve helped build.
            </h2>
          </div>
          <div>
            <p>A selection of applications and websites I’ve contributed to.</p>
            <TextLink href="/work">View all work</TextLink>
          </div>
        </div>
        <div className="featured-projects">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
        </div>
      </section>
      <section className="services-section">
        <div className="container section split-section">
          <div className="section-side" data-reveal="up">
            <p className="eyebrow">02 What I do</p>
            <h2>
              What I can
              <br />
              help you build.
            </h2>
            <p>
              From a clear first idea to the next version of an existing
              product.
            </p>
            <TextLink href="/services">Explore services</TextLink>
          </div>
          <ServiceList />
        </div>
      </section>
      <section className="section container">
        <div className="section-heading" data-reveal="up">
          <div>
            <p className="eyebrow">03 Working together</p>
            <h2>
              A clear path from
              <br />
              requirements to release.
            </h2>
          </div>
          <p>
            Direct communication.
            <br />
            Practical decisions.
            <br />
            Regular opportunities to review.
          </p>
        </div>
        <Process />
      </section>
      <section className="about-strip container" data-reveal="up">
        <p className="eyebrow">04 The person behind the work</p>
        <div>
          <h2>Hi, I’m Jesse.</h2>
          <p>{introduction}</p>
          <TextLink href="/about">More about me</TextLink>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
