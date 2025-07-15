import React from "react";
import Banner from "../components/Banner.jsx";
import Category from "../components/Category.jsx";
import FlashSale from "../components/FlashSale.jsx";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <FlashSale></FlashSale>
    </div>
  );
};

export default Home;
