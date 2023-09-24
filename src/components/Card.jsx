import React from "react";
import img_1 from "../assests/letest_articles_1.png";
import { click } from "@testing-library/user-event/dist/click";

const Card = () => {
  return (
    <div className="border flex flex-col max-md:justify-center p-4 rounded-3xl border-[#E5E5E5] w-80 gap-2">
      <img src={img_1} alt="" />
      <div className="flex max-md:justify-center font-semibold text-xl text-[#0E2368]">
        Grilled Tomatoes at Home
      </div>
      <p className="flex max-md:text-center text-[#444957]">
        PLorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard...
      </p>
      <div className="flex max-md:justify-center">
        <button className="text-[#0E2368] p-2 rounded-3xl w-fit border  font-semibold border-[#0E2368]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
