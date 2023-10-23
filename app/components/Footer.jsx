import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            width="20"
            height="20"
            alt="Sushi Regal Logo"
          />
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
