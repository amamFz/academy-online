import Image from "next/image";

export default function BannerCourse() {
  return (
    <div className="relative mb-4">
      <Image
        src="/images/cover/cover-course.png"
        alt="cover-course"
        width={1200}
        height={300}
      />
    </div>
  );
}
