import React from "react";

const Hero = () => {
   return (
      <section className="bg-[url('./assets/hero.png')] bg-cover bg-no-repeat bg-center w-full h-[500px] flex justify-center items-center">
         <div className="text-center text-white">
            <h1 className="text-[50px] mb-5">Let's do it together.</h1>
            <p className="text-[17px] mb-8 font-normal opacity-60">We travel the world in search of stories. Come along for the ride.</p>
            <button className="bg-[#DD783F] py-3 px-8 rounded-[3px] cursor-pointer">View Latest Posts</button>
         </div>
      </section>
   );
};

export default Hero;
