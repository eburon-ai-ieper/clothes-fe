import Logo from "@/public/logo-dark.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Link to="/">
      <nav className="fixed top-2 px-3 py-1 left-[50%] -translate-x-[50%] rounded-full backdrop-blur-xs bg-white/70 border shadow-xs cursor-pointer">
        <img src={Logo} alt="logo" className="h-10 invert-100" />
      </nav>
    </Link>
  );
};

export default NavBar;
