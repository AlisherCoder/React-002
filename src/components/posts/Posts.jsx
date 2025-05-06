import React from "react";
import man1 from "../../assets/man1.png";

const Posts = () => {
   return (
      <section className="bg-[#F7F7F7]">
         <div className="container w-full flex flex-col justify-between pt-[60px] ali">
            <div className="flex justify-center items-center px-5">
               <div className="border-b border-[#DEDEDE] mb-8 text-center w-[162px]">
                  <p className="text-[20px] text-[#2E2E2E] ">Featured Posts</p>
               </div>
            </div>
            <div className="flex gap-5 mb-[60px]">
               <div className="bg-[url('./assets/left.png')] w-[50%] bg-cover bg-no-repeat bg-center h-[280px] flex items-end">
                  <div className="px-4 py-5 flex flex-col w-full text-white gap-1.5">
                     <h3 className="text-[27px]">The Road Ahead</h3>
                     <p className="opacity-70 text-[14px]">The road ahead might be paved - it might not be.</p>
                     <div className="flex gap-2.5 py-1">
                        <img src={man1} alt="" />
                        <p className="flex-1 opacity-70">Mat Vogels</p>
                        <p className="opacity-70">September 25, 2015</p>
                     </div>
                  </div>
               </div>

               <div className="bg-[url('./assets/right.png')] w-[50%] bg-cover bg-no-repeat bg-center h-[280px] flex items-end">
                  <div className="px-4 py-5 flex flex-col w-full text-white gap-1.5">
                     <h3 className="text-[27px]">The Road Ahead</h3>
                     <p className="opacity-70 text-[14px]">The road ahead might be paved - it might not be.</p>
                     <div className="flex gap-2.5 py-1">
                        <img src={man1} alt="" />
                        <p className="flex-1 opacity-70">Mat Vogels</p>
                        <p className="opacity-70">September 25, 2015</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="flex justify-center items-center px-5">
               <div className="border-b border-[#DEDEDE] mb-8 text-center w-[162px]">
                  <p className="text-[20px] text-[#2E2E2E] ">Most Recent</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Posts;
