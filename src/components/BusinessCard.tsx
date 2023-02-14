import { FunctionComponent } from "react";
import Image from "next/image";
import GABI from "../../public/GABI.png";

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
        ${className}
      `}
    >
      <header>
        <Image
          src={GABI}
          alt="professional-headshot of Maria Burmeister"
          className="mr-auto h-32 w-32 rounded-full object-cover object-right-top ring-2 ring-purple-900 ring-offset-4 md:mx-auto "
        />
        <h1 className="text-wrap mt-4 truncate whitespace-pre-line text-left font-rubikMono text-xl font-bold text-purple-600 ">
          <span className="text-green-200">
            Maria
            <br />
          </span>
          Burmeister
        </h1>
        <hr />
        <h2 className="truncate text-left text-purple-300">
          Frontend Developer
        </h2>
      </header>
      {/* <section>// skills</section> */}

      <section className="-mx-6 my-auto bg-purple-200 p-4 text-center shadow-inner shadow-purple-300">
        <p className=" mb-2 self-center text-center align-middle leading-tight text-purple-800">
          <Location className="inline align-baseline text-xs" /> Hamburg - De
        </p>
        <a
          type="email"
          href="mailto:mariaburmeister+work@protonmail.com"
          className="self-center truncate whitespace-normal leading-tight text-purple-800 hover:text-green-600"
        >
          maria
          <wbr />
          burmeister
          <wbr />
          +work
          <wbr />
          @proton
          <wbr />
          .me
        </a>
      </section>
      <section className="mt-4 flex flex-row flex-wrap justify-around gap-2 text-purple-800">
        <a href="https://github.com/MariaBurmeister">
          <GitHub className="inline text-xl" />
        </a>
        <a href="https://www.linkedin.com/in/mariaburmeister/">
          <LinkedIn className="inline text-xl" />
        </a>
        <a href="https://mariaburmeister.com">
          <Website className="inline text-xl" />
        </a>
      </section>
    </section>
  );
};
