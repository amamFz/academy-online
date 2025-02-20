import Link from "next/link";
import { Button } from "../ui/button";

const AboutCourse = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="w-full rounded-3xl bg-accent bg-opacity-10 px-24 py-12">
          <h2 className=" mb-6 pt-4 text-center text-xl font-semibold tracking-wide text-primary md:text-3xl">
            Online coaching lessons for remote learning.
          </h2>
          <p className="text-blaclk/60 mx-auto mb-12 max-w-203 text-center text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </p>
          <div className="text-center ">
            <Link href="/course">
              <Button variant={"default"} size={"sm"}>
                Start Learning Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
