"use client";

import { GoArrowUpRight, GoStarFill } from "react-icons/go";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import Link from "next/link";
const Course = () => {
  const data = [
    {
      title: "Learning JavaScript With Imagination",
      image: "/images/course/course-1.png",
      tag: "Development",
      star: <GoStarFill />,
      rating: "(4.8 Reviews)",
      instruktur: "David Millar",
      icon: <GoArrowUpRight />,
    },
    {
      title: "The Complete Graphic Design for Beginners",
      image: "/images/course/course-2.png",
      tag: "Design",
      star: <GoStarFill />,
      rating: "(4.5 Reviews)",
      instruktur: "Jenny Wilson",
      icon: <GoArrowUpRight />,
    },
    {
      title: "Learning Digital Marketing on Facebook",
      image: "/images/course/course-3.png",
      tag: "Marketing",
      star: <GoStarFill />,
      rating: "(4.3 Reviews)",
      instruktur: "Wade Warren",
      icon: <GoArrowUpRight />,
    },
    {
      title: "Financial Analyst Training & Investing Course",
      image: "/images/course/course-4.png",
      tag: "Business",
      star: <GoStarFill />,
      rating: "(4.8 Reviews)",
      instruktur: "Robert Fox",
      icon: <GoArrowUpRight />,
    },
    {
      title: "Data Analysis & Visualization Masterclass",
      image: "/images/course/course-5.png",
      tag: "Data Science",
      star: <GoStarFill />,
      rating: "(4.5 Reviews)",
      instruktur: "Guy Hawkins",
      icon: <GoArrowUpRight />,
    },
    {
      title: "Master the Fundamentals of Math",
      image: "/images/course/course-6.png",
      tag: "Mathematic",
      star: <GoStarFill />,
      rating: "(4.7 Reviews)",
      instruktur: "Sawpawlo Mark",
      icon: <GoArrowUpRight />,
    },
  ];
  return (
    <section className="mt-46 h-[800px] bg-accent bg-opacity-10">
      <div className="container mx-auto ">
        <div className="grid h-[800px] items-center justify-center md:grid-cols-1 lg:grid-cols-12">
          <div className="p-6 lg:col-span-3 lg:p-4">
            <h1 className="text-4xl font-semibold leading-none text-primary lg:text-5xl">
              Most <span className="text-third">Popular Course</span>
            </h1>
          </div>
          <div className="overflow-x-hidden px-4 lg:col-span-9">
            <Carousel>
              <CarouselContent>
                {data.map((item, index) => {
                  return (
                    <CarouselItem key={index}>
                      <Link href={"/course/course_detail/123"}>
                        <div className="group relative flex  cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white px-4 py-4 transition-all duration-200  hover:bg-black hover:bg-opacity-5">
                          {/* hover:bg-black hover:bg-opacity-5 */}
                          <Image
                            className="w-full rounded-md mix-blend-darken"
                            src={item.image}
                            alt="image"
                            width={300}
                            height={200}
                          />
                          <div className="flex items-center justify-between gap-4">
                            <p className="rounded-full bg-[#EFEFF2] px-2 py-1 text-sm text-primary/90">
                              {item.tag}
                            </p>
                            <p className="flex items-center text-sm font-semibold text-black/50">
                              <span className="mr-1 text-[#F8BC24]">
                                {item.star}
                              </span>
                              {item.rating}
                            </p>
                          </div>
                          <h2 className=" text-lg font-semibold text-primary">
                            {item.title}
                          </h2>
                          <div className="flex items-center gap-6"></div>
                          <div className="border-b border-stroke"></div>
                          <div className="flex items-center justify-between">
                            <p className="text-black/40">
                              by
                              <span className="text-secondary">
                                {" "}
                                {item.instruktur}
                              </span>{" "}
                            </p>
                            <button className="rounded-md p-2 text-2xl text-secondary shadow-card transition-all duration-200 group-hover:bg-secondary group-hover:text-white">
                              {item.icon}
                            </button>
                          </div>
                        </div>
                      </Link>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
