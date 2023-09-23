import React from "react";
import pizzaimg from "../assests/pizza.png";
import vector from "../assests/Vector 1 red beside pizza.png";
import truck from "../assests/truck.png";
import arrow from "../assests/Vector 2 arrow.png";

const Landingpage = () => {
  return (
    <div className="h-screen flex justify-between">
      <div className="h-screen w-1/2">
        <img
          className="pt-10 pl-14 max-md:hidden"
          src={truck}
          alt=""
          srcset=""
        />
        <div className="pt-20">
          <div className="pl-14 w-auto">
            <div className="flex-col text-[#0E2368] font-bold text-6xl ">
              <div className="p-0">Discover the </div>
              <div className="p-0">
                <span className="text-[#E23744]">Best</span> Food
              </div>
              <div className="p-0">and Drinks</div>
            </div>
            <p className="pt-7">
              <p>Naturally made Healthcare Products for the</p>
              <p>better care & support of your body.</p>
            </p>
            <button className="p-3 bg-[#E23744] rounded-3xl text-white mt-7">
              Explore Now!
            </button>
          </div>
        </div>
      </div>
      <div className="h-screen w-1/2">
        <img
          className="absolute min-h-screen w-1/2"
          src={vector}
          alt="red vector"
        />
        <button className="absolute text-white top-8 end-9 border border-white p-2 rounded-3xl justify-center text-center">
          Get in touch
        </button>
        <img
          className="absolute end-0 pr-28 pt-40 max-md:hidden"
          src={arrow}
          alt="arrow"
        />
        <img className="h-screen pt-3 pl-6" src={pizzaimg} alt="pizza" />
      </div>
    </div>
  );
};

export default Landingpage;
