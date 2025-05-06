import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import man from "../../assets/man1.png";

const images = [image1, image2, image3, image4, image5, image1];

const Cards = () => {
   return (
      <section className="bg-[#f7f7f7] pb-[108px]">
         <div className="container grid grid-cols-3 gap-6">
            {images.map((img) => (
               <div className="bg-white flex flex-col">
                  <div>
                     <img className="w-full" src={img} alt="" />
                  </div>
                  <div className="flex flex-col flex-1">
                     <div className="p-3.5 flex-1">
                        <p>Still Standing Tall</p>
                        <p className="text-[13px] text-[#7A7A7A]">Life begins at the end of your comfort zone.</p>
                     </div>
                     <div className="p-3.5 flex gap-2.5 text-[12px] text-[#7a7a7a] border-t border-gray-200">
                        <img src={man} alt="" />
                        <p className="flex-1">William Wong</p>
                        <p>9/25/2015</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Cards;
