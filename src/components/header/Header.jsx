import React from "react";

const Header = () => {
   return (
      <header className="absolute w-full">
         <div className="container">
            <nav className="flex justify-between items-center h-[74px] py-7 text-white">
               <div className="text-[26px] font-normal">Escape.</div>
               <ul className="flex gap-10 uppercase text-[12px]">
                  <li>
                     <a href="">Home</a>
                  </li>
                  <li>
                     <a href="">categories</a>
                  </li>
                  <li>
                     <a href="">about</a>
                  </li>
                  <li>
                     <a href="">contact</a>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;
