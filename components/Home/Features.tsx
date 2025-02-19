import {
  PiGraduationCapThin,
  PiBookLight,
  PiCertificateThin,
} from "react-icons/pi";

const data = [
  {
    title: "Expert Tutors",
    description: "Get ready for your next lesson with our expert tutors",
    icon: <PiGraduationCapThin />,
  },
  {
    title: "Effective Courses",
    description: "Our courses are designed to help you achieve your goals",
    icon: <PiBookLight />,
  },
  {
    title: "Earn Certificate",
    description: "Get ready for your next lesson with our expert tutors",
    icon: <PiCertificateThin />,
  },
];
const Features = () => {
  return (
    <section className="container mx-auto pb-6 pt-36">
      <div className="flex flex-col gap-4 lg:flex-row">
        {data.map((item, index) => {
          return (
            <div key={index} className="rounded-xl bg-white p-8 shadow-md">
              <div className="flex items-center gap-4">
                <div className="mb-6 flex items-center justify-center rounded-full bg-secondary">
                  <p className="p-4 text-4xl text-white">{item.icon}</p>
                </div>
                <h3 className="text-lg font-semibold text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="leading-relaxed tracking-wide text-graydark/60">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
