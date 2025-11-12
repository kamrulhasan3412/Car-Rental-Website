import React from "react";
import Banner from "../components/Home/Banner";
import OurServices from "../components/Home/OurServices";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <OurServices></OurServices>
      </section>
    </div>
  );
};

export default Home;
