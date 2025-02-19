"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${link.path === pathname && "text-secondary "} text-lg font-medium capitalize text-primary transition-all duration-200 hover:text-secondary`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
