import { courseInformation } from "@/data/course";

export default function DescriptionCourse() {
  return (
    <div className="mb-6 rounded-lg p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold text-primary">
        Course Description
      </h2>
      <p className="mb-4 text-sm leading-relaxed tracking-wide text-black/80 md:text-base">
        Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.dolor sit amet, consectetur adipiscing elited do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h2 className="mb-4 text-xl font-semibold text-primary">
        What you&apos;ll learn in this course?
      </h2>
      <p className="mb-4 text-sm leading-relaxed tracking-wide text-black/80 md:text-base">
        Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
      </p>
      <ul className="mb-4">
        {courseInformation.map((courses) => {
          const IconCheck = courses.check;
          return (
            <li
              className="flex items-center gap-4 text-base font-semibold text-primary md:text-lg"
              key={courses.id}
            >
              <span className="text-xl text-green-500">
                <IconCheck />
              </span>
              {courses.courseInformation}
            </li>
          );
        })}
      </ul>
      <p className="mb-4 text-sm leading-relaxed tracking-wide text-black/80 md:text-base">
        Morem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas
        accumsan.Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magn.
      </p>
    </div>
  );
}
