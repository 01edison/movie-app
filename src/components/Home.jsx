import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeCategory from "./HomeCategory";

const Home = () => {
  return (
    <div>
      <HomeCategory categoryName={"Hotest Series"} type={"series"} />
      <HomeCategory categoryName={"Latest Movies"} type={"movie"} />
    </div>
  );
};

export default Home;
