import VideoThumbnail from "../VideoThumbnail";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PiPlayFill } from "react-icons/pi";
const data = [
  {
    tag: "Overview",
  },
  {
    tag: "Lessons",
  },
  {
    tag: "Review",
  },
];

const lessons = [
  {
    title: "Setup Project",
    time: "5:00",
    playIcon: <PiPlayFill />,
  },
  {
    title: "Setup Project",
    time: "5:00",
    playIcon: <PiPlayFill />,
  },
  {
    title: "Setup Project",
    time: "5:00",
    playIcon: <PiPlayFill />,
  },
  {
    title: "Setup Project",
    time: "5:00",
    playIcon: <PiPlayFill />,
  },
];
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
                {data.map((item, index) => {
                  return (
                    <Link key={index} href="#">
                      <Button className="rounded-full">{item.tag}</Button>
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* sidebar course lesson */}
            <div className="sticky top-0  w-full self-start lg:w-[30%]">
              <div className="rounded-lg  p-4 shadow-md">
                <Accordion type="single" collapsible>
                  <AccordionItem value="1">
                    <AccordionTrigger>
                      <h2 className="mb-4 text-xl font-semibold text-primary">
                        Course Lessons
                      </h2>
                      {/* <Link href="#">
                        <span className="px-4">
                          <PiCaretDownLight className="h-6 w-6" />
                        </span>
                      </Link> */}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        {lessons.map((lesson, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center justify-between p-4"
                            >
                              <Link
                                href="#"
                                className="flex items-center gap-4"
                              >
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary md:h-10 md:w-10">
                                  {" "}
                                  <span className=" text-white">
                                    {lesson.playIcon}
                                  </span>
                                </div>
                                <h3 className="text-base font-semibold text-primary md:text-lg">
                                  {lesson.title}
                                </h3>
                              </Link>
                              <span className="font-semibold text-primary">
                                {lesson.time}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="rounded-lg  p-4 shadow-md">
                <Accordion type="single" collapsible>
                  <AccordionItem value="1">
                    <AccordionTrigger>
                      <h2 className="mb-4 text-xl font-semibold text-primary">
                        Course Lessons
                      </h2>
                      {/* <Link href="#">
                        <span className="px-4">
                          <PiCaretDownLight className="h-6 w-6" />
                        </span>
                      </Link> */}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        {lessons.map((lesson, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center justify-between p-4"
                            >
                              <Link
                                href="#"
                                className="flex items-center gap-4"
                              >
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary md:h-10 md:w-10">
                                  {" "}
                                  <span className=" text-white">
                                    {lesson.playIcon}
                                  </span>
                                </div>
                                <h3 className="text-base font-semibold text-primary md:text-lg">
                                  {lesson.title}
                                </h3>
                              </Link>
                              <span className="font-semibold text-primary">
                                {lesson.time}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseVideo;
