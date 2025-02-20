import { PiStarFill } from "react-icons/pi";

export default function CourseTag() {
  return (
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
  );
}
