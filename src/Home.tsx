import Button from "./components/Button";
import coding from "./assets/developer-coding.png";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-screen-xl mx-auto pt-20">
        <div className="text-center">
          <h2 className="font-semibold text-5xl">Frontend Developer</h2>
          <p className="mt-1 mb-3">{`{ Javascript, React, Next.js, NodeJS, CSS, Sass... }`}</p>
          <p className="max-w-[400px] mx-auto">
            Specializing in React & Next.js I leverage cutting edge technologies
            to bring web projects to life.
          </p>
          <div className="mt-6 flex items-center mx-auto justify-center gap-4">
            <Button label="See my dev work" variant="secondary" url="#works" />
            <a
              className="text-[#0bc3fd] font-semibold border-b-2 border-[#0bc3fd] pb-[1px]"
              href="/"
            >
              Download CV
            </a>
          </div>
          <div className="flex justify-center my-10">
            <img src={coding} className="h-[320px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
