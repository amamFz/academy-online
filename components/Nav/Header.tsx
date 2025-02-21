"use client";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 bg-white py-8 text-primary ">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo/Logo-learning.png"
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
            <Button variant={"outline"} onClick={() => router.push("/login")}>
              Sign In
            </Button>
            <Button
              variant={"default"}
              onClick={() => router.push("/registrasi")}
            >
              Sign Up
            </Button>
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
