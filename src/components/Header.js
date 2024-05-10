import { MenuData } from "@/lib/data";
import Navbar from "./navbar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed z-[999] w-full bg-transparent">
      <div className="container">
        <div className="pl-10">
          <Image width={231} height={129} src="/logo.svg" />
        </div>
        <Navbar className="top-2" menu={MenuData} />
      </div>
    </header>
  );
};

export default Header;
