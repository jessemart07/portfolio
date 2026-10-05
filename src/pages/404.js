import { Button, Meta, PageIntro } from "@/components/Site";
export default function NotFound() {
  return (
    <>
      <Meta
        title="Page not found | Jesse Codes"
        description="Find your way back to Jesse Codes."
      />
      <PageIntro
        label="404 Page not found"
        title="Let’s get you back on track."
      >
        <p>
          This page isn’t here. You can explore my work or return to the
          homepage.
        </p>
        <div className="hero-actions">
          <Button href="/">Back to home</Button>
          <Button secondary href="/work">
            Explore my work
          </Button>
        </div>
      </PageIntro>
    </>
  );
}
