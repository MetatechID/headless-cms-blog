import { MenuData } from "@/lib/data";
import Navbar from "./navbar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed z-[999] w-full bg-transparent">
      <div className="container">
        <Navbar menu={MenuData} />
      </div>
    </header>
  );
};

export default Header;
