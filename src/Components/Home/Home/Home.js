import React from "react";
import Companies from "../Companies/Companies";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OurWorks from "../OurWorks/OurWorks";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Companies></Companies>
      <Services></Services>
      <OurWorks></OurWorks>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  );
};

export default Home;
