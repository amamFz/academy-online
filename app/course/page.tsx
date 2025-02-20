import BreadcrumbHome from "@/components/Breadcrumbs/BreadcrumbHome";
import AllCourse from "@/components/Course/AllCourse";

const Course = () => {
  return (
    <>
      <main>
        <section className="h-[200px] bg-[#F2FEFF]">
          {/* <Image
            src="/images/cover/cover-2.png"
            width={1200}
            height={300}
            quality={100}
            alt="cover"
            className="w-full"
          /> */}
          <div className="container mx-auto flex h-full items-center">
            <div className="pt-6">
              <h1 className="mb-2 text-4xl font-bold text-primary">
                All Course
              </h1>
              <BreadcrumbHome pageName="Course" />
            </div>
          </div>
        </section>
        <AllCourse />
      </main>
    </>
  );
};

export default Course;
