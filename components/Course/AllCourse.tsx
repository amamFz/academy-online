"use client";
import { course } from "@/data/course";
import Image from "next/image";
import Link from "next/link";

const AllCourse = () => {
  return (
    <section className="bg-accent bg-opacity-10 pb-44 pt-24">
      <div className="container mx-auto p-6 md:p-4 lg:p-2 xl:p-0">
        <h2 className="mb-6 text-2xl font-semibold tracking-wide text-primary">
          Recommended for you
        </h2>
        <p className="mb-6 text-graydark/60">Showing 250 total results</p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {course.map((course) => {
            const IconStar = course.star;
            const IconArrow = course.icon;
            return (
              <Link
                href="/course/course_detail/123"
                key={course.id}
                className="group relative flex cursor-pointer flex-col justify-center gap-4 overflow-hidden rounded-xl bg-white px-4 py-4 shadow-xl transition-all duration-200 hover:bg-black hover:bg-opacity-5"
              >
                <Image
                  className="w-full rounded-md mix-blend-darken"
                  src={course.image}
                  alt="image"
                  width={300}
                  height={200}
                />
                <div className="flex items-center justify-between gap-4">
                  <p className="rounded-full bg-[#EFEFF2] px-2 py-1 text-sm text-primary/90">
                    {course.tag}
                  </p>
                  <p className="flex items-center text-sm font-semibold text-black/50">
                    <span className="mr-1 text-[#F8BC24]">
                      <IconStar className="h-4 w-4" />
                    </span>
                    {course.rating}
                  </p>
                </div>
                <h2 className=" text-lg font-semibold text-primary">
                  {course.title}
                </h2>
                <div className="flex items-center gap-6"></div>
                <div className="border-b border-stroke"></div>
                <div className="flex items-center justify-between">
                  <p className="text-black/40">
                    by
                    <span className="text-secondary">
                      {" "}
                      {course.instruktur}
                    </span>{" "}
                  </p>
                  <button className="rounded-md p-2 text-2xl text-secondary shadow-card transition-all duration-200 group-hover:bg-secondary group-hover:text-white">
                    <IconArrow />
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllCourse;
