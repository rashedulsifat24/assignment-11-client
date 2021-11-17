import React from "react";
import Banner from "../Banner/Banner";
import WhyPeopleChose from "../WhyPeopleChose/WhyPeopleChose";
import Items from "./../Items/Items";

const Home = () => {
 
  return (
    <div>
      <Banner></Banner>
      <Items></Items>
      <WhyPeopleChose></WhyPeopleChose>
    </div>
  );
};

export default Home;
