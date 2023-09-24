import React from "react";
import pizzaimg from "../assests/pizza_avif.avif";
import vector from "../assests/Vector 1 red beside pizza.png";
import truck from "../assests/truck.png";
import arrow from "../assests/Vector 2 arrow.png";

const Landingpage = () => {
  return (
    <div className="lg:h-screen flex flex-shrink-0 flex-wrap-reverse justify-between">
      <div className="shrink-0 max-md:flex max-md:text-center">
        <img
          className="pt-10 pl-14 max-md:hidden"
          src={truck}
          alt="truck with french fries"
          loading="lazy"
        />
        <div className="pt-20 max-md:text-center">
          <div className="min-md:pl-14 flex flex-col w-auto justify-center lg:w-[26rem] max-md:w-[21rem] max-md:px-16">
            <div className="flex-col justify-center text-[#0E2368] font-bold lg:text-6xl max-md:text-3xl  ">
              <div className="max-md:justify-center">
                Discover the
                <span className="text-[#E23744]"> Best</span> Food and Drinks
              </div>
            </div>
            <p className="pt-7 flex lg:text-lg  flex-col max-md:justify-center flex-wrap">
              Naturally made Healthcare Products for the better care & support
              of your body.
            </p>
            <div className="flex max-md:justify-center">
              <button className="p-3 w-fit bg-[#E23744] rounded-3xl text-white mt-7">
                Explore Now!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen max-md:w-screen flex justify-end">
        <img
          className="absolute min-h-screen lg:w-1/2 w-full "
          src={vector}
          alt="red vector"
          loading="lazy"
        />
        <button className="absolute text-white top-8 end-9 border border-white p-2 rounded-3xl justify-center text-center">
          Get in touch
        </button>
        <img
          className="absolute end-0 pr-28 pt-40 max-md:hidden"
          src={arrow}
          alt="arrow"
          loading="lazy"
        />
        <img
          className="max-md:h-screen pt-6 pr-10"
          src={pizzaimg}
          alt="pizza"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Landingpage;
