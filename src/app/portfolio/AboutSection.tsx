import { LinkButton, Stepper } from "@/components";
import { getContactEmail } from "@/utils/getContactEmail";
import { AboutFaceIcon } from "./AboutFaceIcon";

const emailButtonClassName =
  "text-nowrap border-none bg-linear-to-b from-purple-200 to-purple-500 px-4 py-1 text-green-100 shadow-lg w-min active:from-purple-500 active:to-purple-200";

export function AboutSection() {
  const contactEmail = getContactEmail();

  return (
    <>
      <h2 className="sr-only">About</h2>
      <Stepper
        className="h-full min-h-0 text-center text-lg text-slate-600 dark:text-slate-300"
        nextStep="chevron"
        prevStep="chevron"
        overlay={
          <LinkButton
            className={emailButtonClassName}
            href={`mailto:${contactEmail}`}
          >
            email me
          </LinkButton>
        }
      >
        <h3 className="flex flex-col items-center gap-2 text-2xl font-bold text-purple-300 dark:text-purple-200">
          <AboutFaceIcon /> Hi, I&apos;m Gabi!
          <span className="text-base font-normal text-purple-300 dark:text-purple-200">
            (Maria <strong>Gabriela</strong> Burmeister)
          </span>
        </h3>
        <p>
          I&apos;m a <strong>Frontend Developer</strong> with a{" "}
          <strong>graphic design</strong> background, working with{" "}
          <strong>TypeScript</strong>, <strong>React</strong> and{" "}
          <strong>Vue</strong>. I care about interfaces that are{" "}
          <strong>accessible</strong>, <strong>usable</strong> and{" "}
          <strong>fast</strong> - and about the product thinking behind them.
        </p>
        <p>
          I moved into software development in <strong>2020</strong> and have
          grown through self-directed learning and hands-on work: from an{" "}
          <strong>internship</strong>, to owning features on a multidisciplinary
          product team, to leading a large-scale{" "}
          <strong>frontend migration</strong> as a company&apos;s first
          frontend-focused developer.
        </p>
        <p>
          Most recently I owned the migration of a Laravel + Blade application
          to <strong>Inertia.js, Vue 3 and TypeScript</strong>, introduced{" "}
          <strong>automated frontend testing</strong> and{" "}
          <strong>product analytics</strong>, and established the conventions a
          growing frontend codebase needs to stay maintainable.
        </p>
        <p>
          My foundation in graphic design still shapes how I approach UI, design
          systems and product thinking.
        </p>
        <p>
          I like being involved beyond the ticket - feature discovery, defining
          metrics, product thinking and knowledge-sharing. Good frontend is a{" "}
          <strong>team practice</strong>, not just a codebase.
        </p>
        <p>
          I&apos;m currently looking for a new opportunity. If you think
          I&apos;d be a good fit for your team, I&apos;d love to hear from you.
        </p>
      </Stepper>
    </>
  );
}
