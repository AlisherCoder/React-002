import React from "react";

const Footer = () => {
   return (
      <footer className="w-full h-[378px] bg-[url('./assets/footer.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-between items-center">
         <div className="text-center flex flex-col justify-center items-center pb-[90px] pt-2 mt-[62px]">
            <div className="px-3 pb-1.5 border-b border-[#DEDEDE] mb-5">
               <h3 className="text-[25px] text-[#EFEFEF]">Stay in Touch</h3>
            </div>
            <div className="rounded-[3px] overflow-hidden flex justify-center items-center">
               <input className="w-[375px] h-12 bg-white indent-7 outline" type="text" placeholder="Enter your email address " />
               <button className="w-[125px] h-12 text-white border cursor-pointer">Submit</button>
            </div>
         </div>
         <div className="w-full border bg-black opacity-40">
            <nav className="container flex justify-between items-center h-[89px] py-7 text-white">
               <div className="text-[26px] text-[#fff] font-normal">Escape.</div>
               <ul className="flex gap-10 uppercase text-[11px]">
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
      </footer>
   );
};

export default Footer;
