import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="kite"
        productDescription="Ourultra-fast flagship trading platform with steaming market data, advanced charts, an eligant UI,and more. Enjoy the kite experience seamlessly on your Android or iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection imageURL="media\images\console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodhaaccount. Gain insights into your trades and investments with in-depth reports and visualizations."
        learnMore=""/>
      <LeftSection
        imageURL="media\images\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your demat account. Enjoy the envestment experience on yourAndoid or iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media\images\kiteconnect.png"
        productName="Kite  Connect API"
        productDescription="Build powerful trading plateformsand experiences with uor super simple HTTP/JSON APIS. IF you are a startup,build your investmentapp and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
        imageURL="media\images\varsity.png"
        productName="Varsity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in depth coverage and illustrations. Content is brocken down into byte-size cards to help you learnon the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
       <p className="text-center mt-5 mb-5">want to know more about our technology stock? chek out the Zerodha. tech blog.</p>
      <Universe />
    </>
  );
}

export default ProductPage;
