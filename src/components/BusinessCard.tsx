import { FunctionComponent } from "react";
import Image from "next/image";
import GABI from "../../public/GABI.jpg";

import {
  BsFillGeoAltFill as Location,
  BsGithub as GitHub,
  BsLinkedin as LinkedIn,
} from "react-icons/bs";

const CONTACT_EMAIL = "mariaburmeister+work@mariaburmeister.com";

export const BusinessCard: FunctionComponent<{ className: string }> = ({
  className,
}) => {
  return (
    <section
      className={`
      relative
          grid  
          grid-cols-1
          grid-rows-[1fr_auto_auto]
          gap-4
          rounded-xl 
          bg-white
          p-6 
          shadow-2xl 
          ring-2 
          ring-white 
          ring-offset-4 
          ring-offset-slate-300
          dark:bg-slate-900
          dark:ring-slate-700
          dark:ring-offset-slate-950
        ${className}
      `}
    >
      <header className="grid grid-rows-[1fr_auto_auto_auto]">
        <Image
          src={GABI}
          width={192}
          height={192}
          sizes="192px"
          priority
          alt="Maria Burmeister"
          className="mr-auto h-48 w-48 self-center rounded-full object-cover object-right-top ring-2 ring-purple-900 ring-offset-4 md:mx-auto "
        />
        <hgroup>
          <h1 className="text-wrap mt-4 truncate whitespace-pre-line text-left font-rubikMono text-xl font-bold text-purple-600 dark:text-purple-300">
            <span className="text-green-200 dark:text-green-300">
              Maria
              <br />
            </span>
            Burmeister
          </h1>
          <hr />
          <span className=" mt-1 text-left text-sm leading-snug text-purple-400 dark:text-purple-400">
            Frontend Developer
          </span>
          </hgroup>
      </header>

      <section className="-mx-6 my-auto bg-purple-200 p-4 text-center shadow-inner shadow-purple-300 dark:bg-purple-950 dark:shadow-purple-900">
        <p className=" mb-2 self-center text-center align-middle leading-tight text-purple-800 dark:text-purple-200">
          <Location className="inline align-baseline text-xs" /> Hamburg - De
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="self-center truncate whitespace-normal leading-tight text-purple-800 underline hover:text-green-600 dark:text-purple-200 dark:hover:text-green-300"
        >
          maria
          <wbr />
          burmeister
          <wbr />
          +work
          <wbr />
          @mariaburmeister
          <wbr />
          .com
        </a>
      </section>
      <section className="mt-4 flex flex-row flex-wrap justify-around gap-2 text-purple-800 dark:text-purple-200">
        <a
          href="https://github.com/MariaBurmeister"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-green-600 dark:hover:text-green-300"
          title="GitHub"
        >
          <GitHub className="inline text-xl" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/mariaburmeister/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-green-600 dark:hover:text-green-300"
          title="LinkedIn"
        >
          <LinkedIn className="inline text-xl" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </section>
    </section>
  );
};
