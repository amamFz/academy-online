import BannerCourse from "@/components/Course/BannerCourse";
import { Button } from "@/components/ui/button";
import { PiCheck } from "react-icons/pi";

const courseInformation = [
  {
    check: <PiCheck />,
    courseInformation: "1400+ Materi Video",
  },
  {
    check: <PiCheck />,
    courseInformation: "1400+ Modul Praktik Portfolio",
  },
  {
    check: <PiCheck />,
    courseInformation: "Sertifikat di Tiap Materi",
  },
  {
    check: <PiCheck />,
    courseInformation: "Grup Komunitas",
  },
];
const Checkout = () => {
  return (
    <>
      <section className="pb-32 pt-24">
        <div className="container mx-auto">
          <div className="relative flex flex-col gap-6 p-4 lg:flex-row">
            <div className="w-full lg:w-[70%]">
              {/* image */}
              <BannerCourse />

              {/* title course */}
              <h1 className="mb-4 text-xl font-semibold tracking-wide text-primary md:text-2xl">
                The Complete Web Development Course
              </h1>

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
                  Benefits
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
                        className="flex items-center gap-4 text-sm font-semibold text-primary md:text-base"
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
                {/* <p className="mb-4 text-sm leading-relaxed tracking-wide text-black/80 md:text-base">
                  Morem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.Dorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magn.
                </p> */}
              </div>
            </div>
            {/* sidebar */}
            <div className="sticky top-0  w-full self-start rounded-lg shadow-md lg:w-[30%]">
              <div className="p-6">
                <h2 className="mb-4 text-xl font-semibold text-primary">
                  List Product
                </h2>
                <p className="mb-4 font-semibold text-primary">
                  Payment Details
                </p>
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-semibold text-primary">Subtotal</p>
                  <p className="font-semibold text-primary">Rp 1.000.000</p>
                </div>

                <div className="mb-4 flex items-center justify-between">
                  <p className="font-semibold text-primary">Total</p>
                  <p className="font-semibold text-primary">Rp 1.000.000</p>
                </div>

                {/* Button Start Learning */}
                <div className="mt-8 text-center">
                  <Button size="sm" className="w-full rounded-full">
                    continue paying
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

export default Checkout;
