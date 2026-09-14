import { LinkButton, Steps } from "@/components";
import { AboutFaceIcon } from "./AboutFaceIcon";

const CONTACT_EMAIL = "mariaburmeister+work@mariaburmeister.com";

export function AboutSection() {
  return (
    <>
      <h2 className="sr-only">About</h2>
      <Steps
        className="py-4 text-center text-lg text-slate-600 dark:text-slate-300"
        nextStep="mdi:chevron-right"
        prevStep="mdi:chevron-left"
      >
        <div>
          <h4 className="mb-8 text-2xl font-bold text-purple-300 dark:text-purple-200">
            <AboutFaceIcon /> Hi, I&apos;m Gabi!
          </h4>
          <p>
            I&apos;m a self-taught <strong>Frontend Engineer</strong> with a
            <strong> Graphic design </strong>
            background, and a passion for developing{" "}
            <strong>delightful UX&apos;s</strong> and{" "}
            <strong>polished UI&apos;s</strong>.
          </p>
        </div>
        <div>
          <p className="mb-2">
            Some of the technologies I enjoy working with include{" "}
            <strong>React</strong>, <strong>Typescript</strong> and{" "}
            <strong>Tailwind css</strong>.
          </p>
          <p>
            As a <strong>developer</strong> and a <strong>learner</strong>, I am
            always looking for ways to improve my skills and learn new
            technologies.
          </p>
        </div>
        <div>
          <p className="mb-2">
            I take pride in sharing my <strong>work philosophy</strong>, which
            is to always strive to <strong>improve myself</strong>, my{" "}
            <strong>environments</strong> - be them <strong>physical</strong> or
            <strong> digital</strong> - and the <strong>relationships</strong>{" "}
            with the people around me.
          </p>
          <p>
            This tends to make me a <strong>good team player</strong>, and a
            promoter of a <strong>healthy </strong>
            and <strong>communicative</strong> work environment.
          </p>
        </div>
        <div>
          <p className="mb-4">
            I&apos;m currently looking for a new opportunity, so if you have a
            position for which you think I would be a good fit, please feel free
            to reach out!
          </p>
          <LinkButton
            className="border-none bg-gradient-to-b from-purple-200 to-purple-500 px-4 py-1 text-green-100 active:from-purple-500 active:to-purple-200"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            email me
          </LinkButton>
        </div>
      </Steps>
    </>
  );
}
