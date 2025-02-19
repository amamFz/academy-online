import Image from "next/image";

const Photo = () => {
  return (
    <div className=" flex h-full w-full justify-center">
      <div className=" h-[500px] w-[500px]">
        <Image
          src="/images/hero/hero.png"
          alt="home-photo"
          width={800}
          height={800}
          className="object-contain"
        />
      </div>
    </div>
  );
};

const PhotoAbout = () => {
  return (
    <div className=" flex h-full w-full justify-center">
      <div className="relative h-[500px] w-[500px]">
        <Image
          src="/images/cards/aboutHero.png"
          alt="home-photo"
          width={800}
          height={800}
          className="relative z-10 rounded-2xl object-contain"
        />
        <div className="absolute top-0 h-16 w-16 -translate-x-[20%] -translate-y-[20%] rounded-2xl bg-third md:h-24 md:w-24"></div>
        <div className="absolute right-0 h-24 w-24 -translate-y-[90%] translate-x-[10%] rounded-2xl bg-secondary md:h-40 md:w-40"></div>
      </div>
    </div>
  );
};

export { Photo, PhotoAbout };
