import React from "react";
import Hero from "../hero/Hero";
import Menu from "../menu/Menu";
import Posts from "../posts/Posts";
import Cards from "../products/Cards";
const Main = () => {
   return (
      <main>
         <Hero />
         <Menu />
         <Posts />
         <Cards />
      </main>
   );
};

export default Main;
