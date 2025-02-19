"use client";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

const Prising = () => {
  const plans = [
    {
      duration: "1 Month",
      price: "$10",
      benefits: {
        certificatesInEachMaterial: true,
        accessToAllCourses: true,
        downloadResources: true,
        communityGroups: true,
        support: true,
        network: false,
        discont: false,
      },
      link: "/checkout",
    },
    {
      duration: "12 Months",
      price: "$80",
      benefits: {
        certificatesInEachMaterial: true,
        accessToAllCourses: true,
        downloadResources: true,
        communityGroups: true,
        support: true,
        network: true,
        discont: true,
      },
      link: "/checkout",
    },
    {
      duration: "3 Months",
      price: "$25",
      benefits: {
        certificatesInEachMaterial: true,
        accessToAllCourses: true,
        downloadResources: true,
        communityGroups: true,
        support: true,
        network: true,
        discont: false,
      },
      link: "/checkout",
    },
  ];

  return (
    <section className="py-24" id="pricing">
      <div className="container mx-auto">
        <h3 className="mb-6 text-4xl font-semibold leading-none text-primary lg:text-5xl">
          Subscribe Now and Be <span className="text-third">More Awesome</span>
        </h3>
        <p className="mb-12 leading-relaxed tracking-wide text-graydark/60">
          Monthly subscription for access to all materials, without limits. The
          longer it takes, the more savings and big profits.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white text-center shadow-lg"
            >
              <div className="bg-secondary pb-4 pt-6 text-white">
                <h2 className="mb-4 text-2xl font-bold">{plan.duration}</h2>
                <p className="mb-6 text-4xl font-extrabold">{plan.price}</p>
              </div>
              <ul className="space-y-4 p-8 text-left">
                <li className="flex items-center">
                  {plan.benefits.accessToAllCourses ? (
                    <FaCheckCircle className="mr-2 text-green-500" />
                  ) : (
                    <FaTimesCircle className="text-red-500 mr-2" />
                  )}
                  Access to All Courses
                </li>
                <li className="flex items-center">
                  {plan.benefits.certificatesInEachMaterial ? (
                    <FaCheckCircle className="mr-2 text-green-500" />
                  ) : (
                    <FaTimesCircle className="text-red-500 mr-2" />
                  )}
                  Certificates in Each Material
                </li>
                <li className="flex items-center">
                  {plan.benefits.downloadResources ? (
                    <FaCheckCircle className="mr-2 text-green-500" />
                  ) : (
                    <FaTimesCircle className="text-red-500 mr-2" />
                  )}
                  Download Resources
                </li>
                <li className="flex items-center">
                  {plan.benefits.communityGroups ? (
                    <FaCheckCircle className="mr-2 text-green-500" />
                  ) : (
                    <FaTimesCircle className="text-red-500 mr-2" />
                  )}
                  Community Groups
                </li>
                <li className="flex items-center">
                  {plan.benefits.support ? (
                    <FaCheckCircle className="mr-2 text-green-500" />
                  ) : (
                    <FaTimesCircle className="text-red-500 mr-2" />
                  )}
                  24/7 Support
                </li>
                <li className="flex items-center">
                  {plan.benefits.network ? (
                    <FaCheckCircle className="mr-2 text-green-500" />
                  ) : (
                    <FaTimesCircle className="text-red-500 mr-2" />
                  )}
                  Exclusive Networking Events
                </li>
                <li className="flex items-center">
                  {plan.benefits.discont ? (
                    <FaCheckCircle className="mr-2 text-green-500" />
                  ) : (
                    <FaTimesCircle className="text-red-500 mr-2" />
                  )}
                  Diskon For Bootcamp
                </li>
              </ul>
              <div className="py-6">
                <Link href={plan.link}>
                  <Button variant={"default"}>Buy Now</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prising;
