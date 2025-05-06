import React from "react";

const Footer = () => {
   return (
      <footer className="w-full h-[378px] bg-[url('./assets/footer.png')] bg-no-repeat bg-cover bg-center grid place-items-center border">
         <div className="border text-center">
            <div className="px-3.5 py-4 border-b border-[#DEDEDE] mb-5 w-[200px]">
               <h3 className="text-[25px] text-[#EFEFEF]">Stay in Touch</h3>
            </div>
            <div className="w-[500px]">
               <input type="text" placeholder="Enter your email address" />
               <button>Submit</button>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
