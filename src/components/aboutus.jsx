import React from "react";
import aboutus from "../assests/beside about us.png";

const Aboutus = () => {
  return (
    <div className="mt-48">
      <div className="w-full h-96 flex bg-[#1e2a5d0e] flex-wrap">
        <div className="flex h-full justify-center lg:w-1/2">
          <img src={aboutus} alt="cooking table" srcset="" />
        </div>
        <div className="lg:w-1/2">
          <div className="flex-col p-3 w-full justify-center">
            <div className="text-4xl font-bold text-[#0E2368]">About Us</div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. t has
                survived not only five centuries.
              </p>
            </div>
            <button className="text-white p-2 rounded-3xl bg-[#E23744]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
