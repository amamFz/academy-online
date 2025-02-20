import Image from "next/image";
import { PiCalendarBlank, PiGraduationCapLight } from "react-icons/pi";

export default function DetailsInfo() {
  return (
    <div className="mb-6 flex items-center gap-4 md:gap-6">
      <div className="relative">
        <Image
          src="/images/user/user-01.png"
          width={50}
          height={50}
          alt="user"
          className="rounded-full"
        />
      </div>
      {/* author */}
      <p className="text-sm text-black/40 md:text-base">
        By <span className="font-semibold text-secondary">David Millart</span>
      </p>
      <span>•</span>
      {/* tanggal */}
      <p className="flex items-center gap-2">
        <PiCalendarBlank className="h-6 w-6" />{" "}
        <span className="text-sm font-semibold text-black/40 md:text-base">
          24/07/2024{" "}
        </span>
      </p>
      <span>•</span>
      {/* students */}
      <p className="flex items-center gap-2">
        <PiGraduationCapLight className="h-6 w-6" />
        <span className="text-sm font-semibold text-black/40 md:text-base">
          2,250 Students{" "}
        </span>
      </p>
    </div>
  );
}
