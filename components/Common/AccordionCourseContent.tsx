import { IconType } from "react-icons/lib";
import { AccordionContent } from "../ui/accordion";
import Link from "next/link";

interface Lesson {
  id: number;
  title: string;
  time: string;
  playIcon: IconType;
}

interface AccordionCourseProps {
  lesson: Lesson[];
}

export default function AccordionCourse({ lesson }: AccordionCourseProps) {
  return (
    <AccordionContent>
      {lesson.map((item) => (
        <div key={item.id}>
          <div className="flex items-center justify-between p-4">
            <Link href="#" className="flex items-center gap-4">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary md:h-10 md:w-10">
                <span className="text-white">
                  <item.playIcon />
                </span>
              </div>
              <h3 className="text-base font-semibold text-primary md:text-lg">
                {item.title}
              </h3>
            </Link>
            <span className="font-semibold text-primary">{item.time}</span>
          </div>
        </div>
      ))}
    </AccordionContent>
  );
}
