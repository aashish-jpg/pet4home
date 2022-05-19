import React from "react";

function Header({ Icon, active }) {
  return (
    <div className=" flex items-center cursor-pointer md:px-6 sm:h-10 md:hover:bg-gray-300 rounded-xl active:border-b-2 active:border-white group">
      <Icon
        className={`h-5 text-center sm:h-7 mx-auto group-hover:text-blue-600 text-white  ${
          active && "text-sky-500"
        }`}
      />
      
    </div>
  );
}

export default Header;
