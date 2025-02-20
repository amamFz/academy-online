import AccordionCourse from "@/components/Common/AccordionCourseContent";
import VideoThumbnail from "../VideoThumbnail";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { dataButton, lessons } from "@/data/course";

const CourseVideo = () => {
  return (
    <>
      <section className="pb-32 pt-24">
        <div className="container mx-auto">
          <div className="relative flex flex-col gap-6 p-4 lg:flex-row">
            <div className="w-full lg:w-[70%]">
              {/* image */}
              <div className="relative mb-4">
                <VideoThumbnail />
              </div>

              {/* title course */}
              <h1 className="mb-4 text-xl font-semibold tracking-wide text-primary md:text-2xl">
                The Complete Web Development Course
              </h1>

              {/* overview */}
              <div className="mb-6 flex flex-row gap-4">
                {" "}
                {dataButton.map((data) => {
                  return (
                    <Link key={data.id} href="#">
                      <Button className="rounded-full">{data.tag}</Button>
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* sidebar course lesson */}
            <div className="sticky top-0 w-full self-start lg:w-[30%]">
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="rounded-lg p-4 shadow-md mb-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`section-${index + 1}`}>
                      <AccordionTrigger>
                        <h2 className="text-xl font-semibold">
                          Course Section {index + 1}
                        </h2>
                      </AccordionTrigger>
                      <AccordionCourse lesson={lessons} />
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseVideo;
