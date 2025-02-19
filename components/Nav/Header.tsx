"use client";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 text-primary ">
      <div className="container mx-auto flex items-center justify-between">
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

        {/* Navbar Desktop */}
        <div className="hidden items-center gap-12 lg:flex">
          <Nav />

          <div className="flex items-center  gap-4">
            <Button variant={"outline"}>Sign In</Button>
            <Button variant={"default"}>Sign Up</Button>
          </div>
        </div>

        {/* Navbar Mobile */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
