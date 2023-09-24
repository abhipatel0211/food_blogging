import React from "react";
import truck from "../assests/truck.png";
import fb from "../assests/facebook.png";
import insta from "../assests/insta.png";
import twitter from "../assests/twitter_logo.svg";

const Footer = () => {
  return (
    <div className="flex justify-evenly bg-[#1e2a5d0e] text-[#646874] h-fit p-7 max-md:flex-col flex-shrink-0 flex-wrap max-md:pt-4">
      <div className="flex justify-center items-center">
        <img src={truck} alt="truck" srcset="" />
      </div>
      <div>
        <div className="flex font-semibold text-[#0E2368] text-lg ">
          Contact Us
        </div>
        <p className="mt-3">
          Lorem Ipsum Pvt Ltd.5/1, Magalton
          <p>Road, Phartosh Gate near YTM </p>Market, XYZ-343434
        </p>
        <p className="mt-3">example2020@gmail.com</p>
        <p>(904) 443-0343</p>
      </div>
      <div>
        <div className="flex font-semibold text-[#0E2368] text-lg">More</div>
        <div className="flex flex-col gap-3 mt-3">
          <p>About us</p>
          <p>Products</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="max-md:w-full max-md:flex-col-reverse">
        <div className="flex font-semibold text-[#0E2368] text-lg max-md:hidden justify-start">
          Social Links
        </div>
        <div className="flex justify-start pl-0 gap-8">
          <div>
            <img src={insta} alt="insta logo" />
          </div>
          <div>
            <img
              className="h-5 w-5 text-[#0E2368]"
              src={twitter}
              alt="twitter logo"
            />
          </div>
          <div>
            <img src={fb} alt="facebook logo" />
          </div>
        </div>
        <div className="mt-16 p-0">© 2022 Food Truck Example</div>
      </div>
    </div>
  );
};

export default Footer;
