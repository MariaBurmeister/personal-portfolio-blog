import { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  return (
    <main className="] absolute bottom-[60dvh] flex w-full justify-center">
      <h1 className="sr-only">Maria Burmeister</h1>
      <p
        aria-hidden
        className="self-center rounded-full border-4  border-purple-600 px-6 py-12 font-rubikMono text-7xl text-purple-600 shadow-lg shadow-purple-300 drop-shadow-lg "
      >
        <span className="text-green-200">M</span>B
      </p>
    </main>
  );
};

export default Home;
