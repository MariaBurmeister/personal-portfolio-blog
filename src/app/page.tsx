import { LinkButton } from "@/components";
import Link from "next/link";

const Home = () => {
  return (
    <main className="my-auto flex flex-col items-center gap-6 self-center md:my-0">
      <h1 className="sr-only">Maria Burmeister | Frontend Developer</h1>
      <Link
        href="/portfolio"
        aria-label="Go to portfolio"
        className="rounded-full border-4 border-purple-600 px-6 py-12 font-rubikMono text-7xl text-purple-600 shadow-lg shadow-purple-300 drop-shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
      >
        <span className="text-green-200">M</span>B
      </Link>
      <p className="max-w-sm text-center font-baskervville text-lg text-purple-900">
        Frontend developer portfolio — projects, experience, and ways to reach
        me.
      </p>
      <LinkButton href="/portfolio" className="px-4 py-2 text-sm font-medium">
        View portfolio
      </LinkButton>
    </main>
  );
};

export default Home;
