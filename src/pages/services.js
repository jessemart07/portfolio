import {
  ClosingCTA,
  Meta,
  PageIntro,
  Process,
  ServiceList,
} from "@/components/Site";
export default function Services() {
  return (
    <>
      <Meta
        title="Software development services | Jesse Codes"
        description="Websites, web and mobile applications, APIs, ongoing development and practical engineering support."
        path="/services"
      />
      <PageIntro
        label="How I can help"
        title="Practical software development for your business."
      >
        <p>
          Whether you’re starting something new or improving what you already
          have, I work with you to find a clear, practical way forward.
        </p>
      </PageIntro>
      <section className="container service-page">
        <ServiceList expanded />
      </section>
      <section className="container section">
        <div className="section-heading">
          <h2>Working together</h2>
          <p>
            New builds, improvements to existing products and ongoing
            engineering support. Scope and availability are discussed
            individually.
          </p>
        </div>
        <Process />
      </section>
      <ClosingCTA />
    </>
  );
}
