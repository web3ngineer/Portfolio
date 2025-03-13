import React from "react";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <div className=" flex items-center justify-center  bg-white dark:bg-black">
      <footer className="text-center w-full max-w-3xl dark:text-gray-200 font-mono text-gray-500 text-sm border-t border-gray-300 dark:border-[#7e7567] pb-2 ">
        {/* Social Icons */}
        <SocialIcons className="justify-center md:mb-4 mb-20 mt-4"/>©{" "}
        {new Date().getFullYear()} Web3ngineer. All rights reserved.
      </footer>
    </div>
  );
}

export default Footer;
