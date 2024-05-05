import { MenuData } from "@/lib/data";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="z-[999] pt-10 pb-10">
      <div className="container">
        <div>Headless Political Campaign</div>
        <Navbar className="top-2" menu={MenuData} />
      </div>
    </header>
  );
};

export default Header;
