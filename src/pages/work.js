import { ClosingCTA, Meta, PageIntro, ProjectCard } from "@/components/Site";
import { projects } from "@/content/site";
export default function Work() {
  return (
    <>
      <Meta
        title="Selected work | Jesse Codes"
        description="Explore Jesse Martin’s website and application development contributions."
        path="/work"
      />
      <PageIntro label="The work" title="Selected projects and contributions.">
        <p>
          A closer look at the problems and implementation behind my work. Each
          project describes my contribution and the part I played.
        </p>
      </PageIntro>
      <div className="container work-groups">
        {[
          "Applications and business systems",
          "Websites and digital experiences",
        ].map((category) => (
          <section className="work-group" key={category}>
            <h2>{category}</h2>
            <div className="project-grid">
              {projects
                .filter((p) => p.category === category)
                .map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={index}
                  />
                ))}
            </div>
          </section>
        ))}
      </div>
      <ClosingCTA />
    </>
  );
}
