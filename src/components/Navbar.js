import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Header from "./Header";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

function Navbar() {
  return (
    <div className="nav sticky top-0 z-50 flex items-center p-2 lg:px-5 shadow-sm">
      {/* left */}
      <div className="flex items-center">
        <h1 className="font-bold  text-2xl text-white mr-10">Pets4Home</h1>
        <div className="flex ml-2 items-center rounded-full bg-gray-200 p-2">
          <SearchIcon className="text-gray-600" />
          <input
            type="text"
            placeholder="Search Pets"
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none flex-shrink w-60"
          />
        </div>

        {/* center */}
        <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2 mx-6">
            <Header Icon={HomeIcon} />
            <Header Icon={ShoppingCartIcon} />
            <Header Icon={InfoIcon} />
            <Header Icon={ContactPhoneIcon} />
            <Header Icon={AccountCircleIcon}  className="align-items:flex-end"/>
          </div>
        </div>

        {/* right */}

        <div>
          <p className="flex items-center sm:space-x-2 justify-end"></p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
