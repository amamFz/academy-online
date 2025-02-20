import AboutAcordion from "@/components/About/AboutAcordion";
import AboutCourse from "@/components/About/AboutCourse";
import AboutHome from "@/components/About/AboutHome";
import BreadcrumbHome from "@/components/Breadcrumbs/BreadcrumbHome";

const About = () => {
  return (
    <>
      <main>
        <section className="h-[200px] bg-[#F2FEFF]">
          <div className="container mx-auto flex h-full items-center px-6 lg:px-0">
            <div className="pt-6">
              <h1 className="mb-2 text-4xl font-bold text-primary">
                About Learning
              </h1>
              <BreadcrumbHome pageName="About" />
            </div>
          </div>
        </section>
        <AboutHome />
        <AboutCourse />
        <AboutAcordion />
      </main>
    </>
  );
};

export default About;
