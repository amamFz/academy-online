import { PhotoAbout } from "../Home/Photo";

const AboutHome = () => {
  return (
    <section className="pb-14 pt-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-center gap-8 self-center p-8 lg:grid-cols-2 lg:p-0">
          <div className="relative">
            <h2 className="relative z-10 mb-6 text-4xl font-semibold tracking-wide text-primary lg:text-5xl">
              About Our <span className="text-third">Platform</span>
            </h2>
            <p className="mb-8 leading-loose tracking-wider text-graydark/60">
              e-learning is a user-friendly online learning hub offering a wide
              range of courses you can access anytime, anywhere. Our expertly
              crafted content is designed to help you develop new skills,
              advance your career.
            </p>
            <div className="absolute top-0 h-14 w-14 -translate-x-2 -translate-y-2 rounded-full bg-[#33EFA0] lg:h-16 lg:w-16"></div>
            <div className="absolute right-0 hidden h-6 w-6 rounded-full bg-[#33EFA0] lg:block "></div>
          </div>
          <div className="relative">
            <PhotoAbout />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
