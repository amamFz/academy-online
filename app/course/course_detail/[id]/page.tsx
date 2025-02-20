"use client";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  PiCalendarBlank,
  PiGraduationCapLight,
  PiStarFill,
  PiCheck,
  PiCaretDownLight,
  PiPlayFill,
  PiPuzzlePiece,
  PiCertificateLight,
} from "react-icons/pi";
import { BsBarChart, BsClockHistory, BsBook } from "react-icons/bs";
import { useRouter } from "next/navigation";

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
const courseInformation = [
  {
    check: <PiCheck />,
    courseInformation: "Work with color & Gradients & Grids",
  },
  {
    check: <PiCheck />,
    courseInformation: "All the useful shortcuts",
  },
  {
    check: <PiCheck />,
    courseInformation: "Be able to create Flyers, Brochures, Advertisements",
  },
  {
    check: <PiCheck />,
    courseInformation: "How to work with Images & Text",
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

const review = [
  {
    image: "/images/user/user-01.png",
    name: "David Heilo",
    job: "Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: <PiStarFill />,
  },
  {
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: <PiStarFill />,
  },
  {
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: <PiStarFill />,
  },
  {
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: <PiStarFill />,
  },
  {
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: <PiStarFill />,
  },
  {
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: <PiStarFill />,
  },
  {
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: <PiStarFill />,
  },
  {
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: <PiStarFill />,
  },
  {
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: <PiStarFill />,
  },
];

interface CourseDetailProps {
  params: {
    id: string;
  };
}
const CourseDetail: React.FC<CourseDetailProps> = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const startLearning = () => {
    router.push(`/course/course_video/${id}`);
  };
  return (
    <>
      <section className="pb-32 pt-24">
        <div className="container mx-auto">
          <div className="relative flex flex-col gap-6 p-4 lg:flex-row">
            <div className="w-full lg:w-3/4">
              {/* image */}
              <div className="relative mb-4">
                <Image
                  src="/images/cover/cover-course.png"
                  alt="cover-course"
                  width={1200}
                  height={300}
                />
              </div>
              {/* tag course */}
              <div className="mb-6 flex items-center gap-12">
                <p className="rounded-full bg-[#EFEFF2] px-2 py-1 text-sm text-primary/90">
                  Development
                </p>
                <p className="flex items-center text-sm font-semibold text-black/50">
                  <span className="mr-1 text-orange-600">
                    <PiStarFill />
                  </span>{" "}
                  (4.5 Reviews)
                </p>
              </div>
              {/* title course */}
              <h1 className="mb-4 text-xl font-semibold tracking-wide text-primary md:text-2xl">
                The Complete Web Development Course
              </h1>
              {/* detail info */}
              <div className="mb-6 flex items-center gap-4 md:gap-6">
                <div className="relative">
                  <Image
                    src="/images/user/user-01.png"
                    width={50}
                    height={50}
                    alt="user"
                    className="rounded-full"
                  />
                </div>
                {/* author */}
                <p className="text-sm text-black/40 md:text-base">
                  By{" "}
                  <span className="font-semibold text-secondary">
                    David Millart
                  </span>
                </p>
                <span>•</span>
                {/* tanggal */}
                <p className="flex items-center gap-2">
                  <PiCalendarBlank className="h-6 w-6" />{" "}
                  <span className="text-sm font-semibold text-black/40 md:text-base">
                    24/07/2024{" "}
                  </span>
                </p>
                <span>•</span>
                {/* students */}
                <p className="flex items-center gap-2">
                  <PiGraduationCapLight className="h-6 w-6" />
                  <span className="text-sm font-semibold text-black/40 md:text-base">
                    2,250 Students{" "}
                  </span>
                </p>
              </div>
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
              {/* course description */}
              <div className="mb-6 rounded-lg p-6 shadow-md">
                <h2 className="mb-4 text-xl font-semibold text-primary">
                  Course Description
                </h2>
                <p className="mb-4 text-sm leading-relaxed tracking-wide text-black/80 md:text-base">
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.dolor sit amet,
                  consectetur adipiscing elited do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </p>
                <h2 className="mb-4 text-xl font-semibold text-primary">
                  What you&apos;ll learn in this course?
                </h2>
                <p className="mb-4 text-sm leading-relaxed tracking-wide text-black/80 md:text-base">
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>
                <ul className="mb-4">
                  {courseInformation.map((courses, index) => {
                    return (
                      <li
                        className="flex items-center gap-4 text-base font-semibold text-primary md:text-lg"
                        key={index}
                      >
                        <span className="text-xl text-green-500">
                          {courses.check}
                        </span>
                        {courses.courseInformation}
                      </li>
                    );
                  })}
                </ul>
                <p className="mb-4 text-sm leading-relaxed tracking-wide text-black/80 md:text-base">
                  Morem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.Dorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magn.
                </p>
              </div>
              {/* start learning */}
              <div className="mb-6 block rounded-lg p-6 shadow-md lg:hidden">
                <div className="">
                  <h2 className="mb-4 text-xl font-semibold text-primary">
                    Course includes
                  </h2>
                  {/* Includes Course */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <BsBarChart className="h-6 w-6" />
                      <p className="text-primary">Level</p>
                    </div>
                    <span className="font-semibold text-black/40">
                      Beginner
                    </span>
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <BsClockHistory className="h-6 w-6" />
                      <p className="text-primary">Duration</p>
                    </div>
                    <span className="font-semibold text-black/40">11h 20m</span>
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <BsBook className="h-6 w-6" />
                      <p className="text-primary">Lessons</p>
                    </div>
                    <span className="font-semibold text-black/40">12</span>
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <PiCertificateLight className="h-6 w-6" />
                      <p className="text-primary">Certifications</p>
                    </div>
                    <span className="font-semibold text-black/40">Yes</span>
                  </div>
                  {/* Button Start Learning */}
                  <div className="mt-8 text-center">
                    <Button
                      onClick={startLearning}
                      size="sm"
                      className="rounded-full"
                    >
                      Start Learning
                    </Button>
                  </div>
                </div>
              </div>
              {/* course lessons */}
              <div className="mb-6 rounded-lg p-6 shadow-md">
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
              {/* course review */}
              <div className="mb-6 rounded-lg p-6 shadow-md">
                <h2 className="mb-4 text-xl font-semibold text-primary">
                  Review
                </h2>
                <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                  {review.map((review, index) => {
                    return (
                      <div key={index} className="rounded-xl p-4 shadow-md">
                        <div className="relative mb-4 flex items-center gap-4">
                          <Image
                            alt="review"
                            width={50}
                            height={50}
                            className="rounded-full"
                            src={review.image}
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-primary">
                              {review.name}
                            </h3>
                            <p className="text-sm text-black/60 ">
                              {review.job}
                            </p>
                          </div>
                        </div>
                        <p className="mb-4 text-sm leading-normal tracking-wide">
                          {review.review}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-orange-500">
                            {review.rating}
                          </span>
                          <PiStarFill className="text-orange-500" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* sidebar */}
            <div className="sticky top-0 hidden w-full self-start rounded-lg shadow-md lg:block lg:w-1/4">
              <div className="px-6 py-12">
                <h2 className="mb-4 text-xl font-semibold text-primary">
                  Course includes
                </h2>
                {/* Includes Course */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <BsBarChart className="h-6 w-6" />
                    <p className="text-primary">Level</p>
                  </div>
                  <span className="font-semibold text-black/40">Beginner</span>
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <BsClockHistory className="h-6 w-6" />
                    <p className="text-primary">Duration</p>
                  </div>
                  <span className="font-semibold text-black/40">11h 20m</span>
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <BsBook className="h-6 w-6" />
                    <p className="text-primary">Lessons</p>
                  </div>
                  <span className="font-semibold text-black/40">12</span>
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <PiCertificateLight className="h-6 w-6" />
                    <p className="text-primary">Certifications</p>
                  </div>
                  <span className="font-semibold text-black/40">Yes</span>
                </div>
                {/* Button Start Learning */}
                <div className="mt-8 text-center">
                  <Button
                    onClick={startLearning}
                    size="sm"
                    className="rounded-full"
                  >
                    Start Learning
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;
