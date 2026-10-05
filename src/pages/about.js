import { ClosingCTA, Meta, PageIntro, TextLink } from "@/components/Site";
import { introduction } from "@/content/site";
export default function About() {
  return (
    <>
      <Meta
        title="About Jesse Martin | Jesse Codes"
        description="Independent software engineer based in Jeffreys Bay, South Africa. Building software since 2018."
        path="/about"
      />
      <PageIntro
        label="A little about me"
        title="An engineer you can work with directly."
      />
      <section className="container about-content">
        <aside>
          <p className="eyebrow">Jesse Martin</p>
          <p>
            Independent software engineer
            <br />
            Jeffreys Bay, South Africa
          </p>
          <div className="about-since">
            Since <strong>2018</strong>
          </div>
        </aside>
        <div className="reading">
          <p className="lead">{introduction}</p>
          <p>
            My work spans interfaces, APIs, data and the practical
            responsibilities of preparing releases and supporting software. I
            work directly with businesses and product teams, helping connect the
            technical details with the people who use the product.
          </p>
          <p>
            I value clear communication, practical scoping and regular review.
            We start by understanding what matters, then build in manageable
            increments with room to ask questions and refine the details.
          </p>
          <TextLink href="/contact">Discuss a project</TextLink>
          <section className="capabilities">
            <h2>Across the stack</h2>
            <dl>
              <div>
                <dt>Web & mobile</dt>
                <dd>React, Next.js, React Native and Expo</dd>
              </div>
              <div>
                <dt>APIs & data</dt>
                <dd>Node.js, C#, .NET, SQL databases and integrations</dd>
              </div>
              <div>
                <dt>Delivery & support</dt>
                <dd>Testing, debugging, Azure and release preparation</dd>
              </div>
            </dl>
          </section>
          <section className="education">
            <p className="eyebrow">Education</p>
            <h2>BCom IT Management</h2>
            <p>University of Johannesburg, 2014 to 2018</p>
          </section>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
