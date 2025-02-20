import { achievments } from "@/data/achievment";
import Image from "next/image";

const color: Record<string, string> = {
  "bg-secondary/10": "bg-secondary/10",
  "bg-orange-500/10": "bg-orange-500/10",
  "bg-red/10": "bg-red/10",
  "bg-blue-500/10": "bg-blue-500/10",
} as const;

type ColorKeys = keyof typeof color;

const Achievment = () => {
  return (
    <section className="py-44">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-2">
          <div>
            <div className="px-6 py-6 lg:px-0 lg:py-4">
              <h2 className="mb-6 text-4xl font-bold text-primary lg:text-5xl">
                Our <span className="text-third">Achievement</span>
              </h2>
              <p className="mb-8 leading-relaxed tracking-wide text-graydark/60">
                Various versions have evolved over the years, sometimes by
                accident,
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-6 lg:p-0">
              {achievments.map((achievment) => {
                const Icon = achievment.icon;
                return (
                  <div
                    className="mb-6 flex items-center gap-4"
                    key={achievment.id}
                  >
                    <div
                      className={`flex rounded-full ${
                        color[achievment.bg as ColorKeys]
                      } p-4`}
                    >
                      <div className={`text-4xl ${achievment.textColor}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold tracking-wide text-primary">
                        {achievment.value.toLocaleString()}
                      </h3>
                      <p className="tracking-wider text-third/80">
                        {achievment.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative self-center">
            <Image
              src="/images/hero/achievement.png"
              alt="achievment"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievment;
