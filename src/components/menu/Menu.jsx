import React from "react";

const Menu = () => {
   return (
      <section className="py-2.5 h-16 bg-white flex justify-center items-center">
         <ul className="container flex justify-between px-11 text-[#768088]">
            <li className="text-[14px]">
               <a href="#">Nature</a>
            </li>
            <li>
               <a href="#">Photography</a>
            </li>
            <li>
               <a href="#">Relaxation</a>
            </li>
            <li>
               <a href="#">Vacation</a>
            </li>
            <li>
               <a href="#">Travel</a>
            </li>
            <li>
               <a href="#">Adventure</a>
            </li>
         </ul>
      </section>
   );
};

export default Menu;
