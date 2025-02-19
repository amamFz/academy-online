import Link from "next/link";
import { Button } from "../ui/button";
import { Photo } from "./Photo";
const Hero = () => {
  return (
    <section className="h-full pb-16">
      {/* Hero */}
      <div className="container mx-auto ">
        <div className="mt-20 grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          {/* Text box */}
          <div className="justify-self-center pt-32 text-center lg:text-left">
            <p className="mb-2 text-base font-bold tracking-wide text-third">
              Start your favourite course
            </p>
            <h1 className="mb-8 max-w-[32rem] text-4xl font-bold tracking-wide text-primary lg:text-5xl lg:leading-tight">
              Now learning from anywhere, and build your
              <span className="text-third"> bright career.</span>
            </h1>
            <Link href={"/course"}>
              <Button variant={"default"}>Start Learning</Button>
            </Link>
          </div>
          <div className="relative ">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
