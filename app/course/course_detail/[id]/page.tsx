"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { dataButton, lessons } from "@/data/course";

import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import BannerCourse from "@/components/Course/BannerCourse";
import SidebarCourse from "@/components/Course/SidebarCourse";
import SidebarCourseMobile from "@/components/Course/SidebarCourseMobile";
import AccordionCourse from "@/components/Common/AccordionCourseContent";

import DetailsInfo from "./details-info";
import DescriptionCourse from "./course-description";
import CourseReview from "./course-review";
import CourseTag from "./course-tag";

interface CourseDetailProps {
  params: Promise<{
    id: string;
  }>;
}
const CourseDetail: React.FC<CourseDetailProps> = ({ params }) => {
  const router = useRouter();
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

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
              <BannerCourse />
              {/* tag course */}
              <CourseTag />
              {/* title course */}
              <h1 className="mb-4 text-xl font-semibold tracking-wide text-primary md:text-2xl">
                The Complete Web Development Course
              </h1>
              {/* detail info */}
              <DetailsInfo />
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
              {/* course description */}
              <DescriptionCourse />
              {/* start learning */}
              <SidebarCourseMobile onClick={startLearning} />
              {/* course lessons */}
              <div className="mb-6 rounded-lg p-6 shadow-md">
                <Accordion type="single" collapsible>
                  <AccordionItem value="1">
                    <AccordionTrigger>
                      <h2 className="mb-4 text-xl font-semibold ">
                        Course Lessons
                      </h2>
                      {/* <Link href="#">
                        <span className="px-4">
                          <PiCaretDownLight className="h-6 w-6" />
                        </span>
                      </Link> */}
                    </AccordionTrigger>
                    <AccordionCourse lesson={lessons} />
                  </AccordionItem>
                </Accordion>
              </div>
              {/* course review */}
              <CourseReview />
            </div>
            {/* sidebar */}
            <SidebarCourse onClick={startLearning} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;
