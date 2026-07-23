import React from "react";
import Navbar from "./assets/components/Navbar";
import Banner from "./assets/sections/Banner-section/Banner";
import Hero from "./assets/sections/hero-section/Hero";
import Muesium from "./assets/sections/muesium-section/Muesium";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Hero />
        {/* <Muesium /> */}
      </main>
    </>
  );
};

export default App;
