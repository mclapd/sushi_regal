import Link from "next/link";
import Image from "next/image";
import Navlink from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Memu",
    path: "#menu",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <div className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              width="20"
              height="20"
              alt="Sushi Regal Logo"
            />
          </Link>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
