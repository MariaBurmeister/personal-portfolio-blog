import { FunctionComponent } from "react";
import Image from "next/image";
import GABI from "../../public/GABI.jpg";

import {
  BsFillGeoAltFill as Location,
  BsGithub as GitHub,
  BsLinkedin as LinkedIn,
  BsGlobe2 as Website,
} from "react-icons/bs";

export const BusinessCard: FunctionComponent<{ className: string }> = ({
  className,
}) => {
  return (
    <section
      className={`
      relative
          grid  
            grid-cols-1
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
      <header>
        <Image
          src={GABI}
          width={128}
          height={128}
          sizes="128px"
          priority
          alt="Maria Burmeister"
          className="mr-auto h-32 w-32 rounded-full object-cover object-right-top ring-2 ring-purple-900 ring-offset-4 md:mx-auto "
        />
        <h1 className="text-wrap mt-4 truncate whitespace-pre-line text-left font-rubikMono text-xl font-bold text-purple-600 dark:text-purple-300">
          <span className="text-green-200 dark:text-green-300">
            Maria
            <br />
          </span>
          Burmeister
        </h1>
        <hr />
        <h2 className="truncate text-left text-purple-300 dark:text-purple-400">
          Frontend Developer
        </h2>
      </header>

      <section className="-mx-6 my-auto bg-purple-200 p-4 text-center shadow-inner shadow-purple-300 dark:bg-purple-950 dark:shadow-purple-900">
        <p className=" mb-2 self-center text-center align-middle leading-tight text-purple-800 dark:text-purple-200">
          <Location className="inline align-baseline text-xs" /> Hamburg - De
        </p>
        <a
          href="mailto:mariaburmeister+work@mariaburmeister.com"
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
        >
          <GitHub className="inline text-xl" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/mariaburmeister/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn className="inline text-xl" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="https://mariaburmeister.com" target="_blank" rel="noreferrer">
          <Website className="inline text-xl" />
          <span className="sr-only">This Website</span>
        </a>
      </section>
    </section>
  );
};
