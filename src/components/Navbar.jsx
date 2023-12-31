import { useState } from "react";
import { menu, close, logo } from "../assets/index";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full h-[80px] z-10 bg-white drop-shadow-lg relative">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="ml-4 md:ml-3 opacity-[90%] w-full h-[110px]"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex sm:mr-10 md:mr-10">
          <button className="border-none bg-transparent text-black mr-4">
            Login
          </button>
          <button className="px-6 py-2">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-10"
          />
        </div>
      </div>
      <ul
        className={
          toggle ? "absolute bg-white w-full px-8 md:hidden" : "hidden"
        }
      >
        <li>Home</li>
        <li>About</li>
        <li>Support</li>
        <li>Platform</li>
        <li>Pricing</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-black mb-4 py-3 px-8">
            Login
          </button>
          <button className="px-6 py-2">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
