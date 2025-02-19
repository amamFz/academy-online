"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const user = [
  {
    avatar: "/images/user/user-01.png",
    name: "David",
    job: "Designer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
  },
  {
    avatar: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
  },
  {
    avatar: "/images/user/user-03.png",
    name: "arel Suit",
    job: "Product Manager",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
  },
  {
    avatar: "/images/user/user-04.png",
    name: "Lexa princess",
    job: "UI/UX Designer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
  },
  {
    avatar: "/images/user/user-05.png",
    name: "arca greg",
    job: "Backend Developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
  },
];
const Fedback = () => {
  return (
    <section className="pb-16 ">
      <div className="container mx-auto">
        <div className="p-6 lg:p-0">
          <h3 className="mb-6 text-4xl font-semibold leading-none text-primary lg:text-5xl">
            Student <span className="text-third">Feedback</span>
          </h3>
          <p className="mb-12 leading-relaxed tracking-wide text-graydark/60">
            Various versions have evolved over the years, sometimes by accident,
          </p>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {user.map((item, index) => {
              return (
                <CarouselItem key={index} className="basis-11/12">
                  <div className="mb-12 rounded-xl bg-white px-8 py-6 shadow-md">
                    <div className="mb-6 flex flex-col gap-4 lg:flex-row">
                      <div className="relative">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          width={70}
                          height={70}
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-xl font-semibold tracking-wide text-primary">
                          {item.name}
                        </h4>
                        <p className="text-base tracking-wide text-third/60">
                          {item.job}
                        </p>
                      </div>
                    </div>
                    <div className="leading-relaxed tracking-wide text-graydark/80 ">
                      {item.description}
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Fedback;
