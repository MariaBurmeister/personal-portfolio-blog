import { PageLayout } from "@/components/layout/PageLayout";
import Link from "next/link";

const Home = () => {
  return (
    <PageLayout variant="content">
      <h1 className="sr-only">Maria Burmeister | Frontend Developer</h1>
      <Link
        id="home-logo"
        href="/portfolio"
        aria-label="Go to portfolio"
        title="Go to portfolio"
        className="rounded-full border-4 border-purple-600 px-6 py-12 font-rubikMono text-7xl text-purple-600 shadow-lg shadow-purple-300 drop-shadow-lg transition hover:scale-[1.02] hover:shadow-xl dark:border-purple-300 dark:text-purple-200 dark:shadow-purple-950"
      >
        <span className="text-green-200 dark:text-green-300" aria-hidden="true">
          M
        </span>
        B<span className="sr-only">Maria Burmeister - Frontend Developer</span>
      </Link>
    </PageLayout>
  );
};

export default Home;
