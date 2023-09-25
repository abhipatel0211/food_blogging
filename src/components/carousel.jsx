import { useState } from "react";
import img_1 from "../assests/letest_articles_1.png";
import img_2 from "../assests/letest_articles_2.png";
import img_3 from "../assests/letest_articles_3.png";
import img_4 from "../assests/letest_articles_4.png";
import img_5 from "../assests/letest_articles_5.png";
import img_6 from "../assests/letest_articles_6.png";

const cards = [
  {
    id: 1,
    title: "Grilled Tomatoes at Home",
    text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: img_1,
    link: "#",
  },
  {
    id: 2,
    title: "Snacks for Travel",
    text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: img_2,
    link: "#",
  },
  {
    id: 3,
    title: "Post-workout Recipes",
    text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: img_3,
    link: "#",
  },
  {
    id: 4,
    title: "How To Grill Corn",
    text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: img_4,
    link: "#",
  },
  {
    id: 5,
    title: "Crunchwrap Supreme",
    text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: img_5,
    link: "#",
  },
  {
    id: 6,
    title: "Broccoli Cheese Soup",
    text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: img_6,
    link: "#",
  },
];

// Card component to display individual cards
const Card = ({ card }) => (
  <div className="border flex flex-col max-md:justify-center p-4 rounded-3xl border-[#E5E5E5] w-80 gap-3">
    <img src={card.image} alt={card.title} loading="lazy" />
    <div className="flex max-md:justify-center font-semibold text-xl text-[#0E2368]">
      {card.title}
    </div>
    <p className="flex max-md:text-center text-[#444957]">{card.text}</p>
    <div className="flex max-md:justify-center">
      <a href={card.link} target="_blank" rel="noopener noreferrer">
        <button className="text-[#0E2368] p-2 rounded-3xl w-fit border  font-semibold border-[#0E2368]">
          Read More
        </button>
      </a>
    </div>
  </div>
);

// CardCarousel component to display a carousel of cards
const CardCarousel = () => {
  const [current, setCurrent] = useState(0);
  const numVisible = 3;

  const visibleCards = cards.slice(current, current + numVisible);

  const goToPrev = () => {
    setCurrent((prev) =>
      prev === 0 ? cards.length - numVisible : prev - numVisible
    );
  };

  const goToNext = () => {
    setCurrent((prev) =>
      prev + numVisible >= cards.length ? 0 : prev + numVisible
    );
  };

  const currentPage = Math.floor(current / numVisible) + 1;
  const totalPages = Math.ceil(cards.length / numVisible);

  return (
    <div className="py-10 gap-2 flex-col justify-start">
      <div className="font-semibold text-[#0E2368] flex p-10 text-4xl lg:w-1/2 justify-center">
        Latest Articles
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {visibleCards.map((card) => (
          <div key={card.id} className="flex-shrink-0">
            <Card card={card} />
          </div>
        ))}
      </div>
      <div className="m-3">
        <div className="flex justify-center items-center gap-3">
          <button onClick={goToPrev} className="border border-black h-7">
            {"<"}
          </button>
          <div className="text-center text-gray-500 items-center">
            {currentPage}/{totalPages}
          </div>
          <button onClick={goToNext} className="border border-black h-7">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
