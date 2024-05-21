import { MenuData } from "@/lib/data";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="z-[51] w-full bg-black sm:fixed sm:bg-transparent">
      <div className="container">
        <Navbar menu={MenuData} />
      </div>
    </header>
  );
};

export default Header;
