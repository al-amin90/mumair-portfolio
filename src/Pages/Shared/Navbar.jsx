import React from "react";
import NavItem from "../../Components/Navbar/NavItem";

const Navbar = () => {
  const navLinks = (
    <div className="flex flex-col lg:flex-row items-center font-medium text-base text-[#000000] *:cursor-pointer lg:gap-6 ">
      <NavItem label={"Home"}></NavItem>
      <NavItem label={"About Me"}></NavItem>
      <NavItem label={"Services"}></NavItem>
      <NavItem label={"Projects"}></NavItem>
      <NavItem label={"Testimonials"}></NavItem>
      <NavItem label={"Contact"}></NavItem>

      <button className="bg-[#FD6F00] hidden lg:flex text-white px-3 py-2 rounded-[5px] whitespace-nowrap">
        Download CV
      </button>
    </div>
  );

  return (
    <div className="max-w-[1920px] w-[90%] lg:w-[78%] mx-auto">
      {/* navbar start */}
      <div className="navbar p-0 mt-4 lg:mt-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <div className="">
            <img src="./mumair.png" className="w-48" alt="" />
          </div>
        </div>

        {/* navbar end part */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu font-normal text-base text-[#000000] gap-2 menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end lg:hidden ">
        <button className="bg-[#FD6F00] text-white px-3 py-2 rounded-[5px] whitespace-nowrap">
        Download CV
      </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
