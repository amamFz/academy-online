import { review } from "@/data/course";
import Image from "next/image";
import { PiStarFill } from "react-icons/pi";

export default function CourseReview() {
  return (
    <div className="mb-6 rounded-lg p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold text-primary">Review</h2>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {review.map((review) => {
          const IconReview = review.rating;
          return (
            <div key={review.id} className="rounded-xl p-4 shadow-md">
              <div className="relative mb-4 flex items-center gap-4">
                <Image
                  alt="review"
                  width={50}
                  height={50}
                  className="rounded-full"
                  src={review.image}
                />
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    {review.name}
                  </h3>
                  <p className="text-sm text-black/60 ">{review.job}</p>
                </div>
              </div>
              <p className="mb-4 text-sm leading-normal tracking-wide">
                {review.review}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">
                  <IconReview />
                </span>
                <PiStarFill className="text-orange-500" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
