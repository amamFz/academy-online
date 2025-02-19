"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Course",
    path: "/course",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuBurger className="text-2xl text-secondary" />
      </SheetTrigger>

      <SheetContent className="flex flex-col items-center justify-center">
        <div className="mb-24 mt-6">
          <Link href="/">
            <Image
              src={"/images/logo/logo-learning.png"}
              alt="Logo"
              priority
              quality={100}
              width={150}
              height={150}
            />
          </Link>
        </div>

        {/* Navbar */}
        <div className="flex flex-col items-center gap-10">
          <nav className="flex flex-col items-center gap-4">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className={`${
                    link.path === pathname && "text-secondary "
                  } text-lg font-medium capitalize text-primary transition-all duration-200 hover:text-secondary`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-col items-center justify-center gap-6">
            <Button variant={"outline"}>Sign In</Button>
            <Button variant={"default"}>Sign Up</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
