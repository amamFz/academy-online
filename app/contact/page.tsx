"use client";
import BreadcrumbHome from "@/components/Breadcrumbs/BreadcrumbHome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+62 821 270 092 75",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ilhamfauzi@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Indonesia, Jawa Barat, Ciamis",
  },
];

const Contact = () => {
  return (
    <>
      <main>
        <section className="h-[200px] bg-[#F2FEFF]">
          <div className="container mx-auto flex h-full items-center px-6 lg:px-0">
            <div className="pt-6">
              <h1 className="mb-2 text-4xl font-bold text-primary">Contact</h1>
              <BreadcrumbHome pageName="Contact" />
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto flex h-full items-center">
            <div className="flex flex-col  justify-center gap-12 lg:flex-row ">
              {/* info */}
              <div className=" mb-8 flex flex-1 xl:mb-0 xl:justify-end">
                <ul className="flex flex-col gap-12">
                  {info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-6"
                      >
                        <div className="flex items-center gap-4 rounded-lg border border-secondary p-12 shadow-md">
                          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-md bg-secondary text-white xl:h-[64px] xl:w-[64px]">
                            <div className="text-[24px]">{item.icon}</div>
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-primary">
                              {item.title}
                            </p>
                            <h3 className="max-w-44 text-lg">
                              {item.description}
                            </h3>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* form */}
              <div className=" mb-12 self-center">
                <form className="flex flex-col gap-6 rounded-xl border border-secondary bg-white p-10 shadow-xl">
                  <h3 className="text-4xl text-primary">Send Us Message</h3>
                  <p className="text-graydark/60">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>

                  {/* textarea */}
                  <Textarea
                    className="h-[200px]"
                    placeholder="Type your message here."
                  />
                  {/* input */}
                  <div className="flex flex-row gap-6">
                    <Input type="fullname" placeholder="Fullname" />
                    <Input type="email" placeholder="Email address" />
                    <Input type="phone" placeholder="Phone number" />
                  </div>
                  {/* btn */}
                  <Button size="sm" className="max-w-40">
                    Send message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto">
            <iframe
              className="h-[500px] w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7693909329046!2d107.60645607573944!3d-6.918150217713029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6255268e897%3A0x5c47c330bb700956!2sBraga%2C%20Kec.%20Sumur%20Bandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1740069583345!5m2!1sid!2sid"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
