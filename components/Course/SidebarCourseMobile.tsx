import { BsBarChart, BsBook, BsClockHistory } from "react-icons/bs";
import { PiCertificateLight } from "react-icons/pi";
import { Button } from "../ui/button";

export default function SidebarCourseMobile({ onClick }) {
  return (
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
          <Button onClick={onClick} size="sm" className="rounded-full">
            Start Learning
          </Button>
        </div>
      </div>
    </div>
  );
}
