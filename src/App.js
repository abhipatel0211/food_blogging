import React from "react";
import Landingpage from "./components/landingpage";
import Aboutus from "./components/aboutus";
import Footer from "./components/footer";
import Carousel from "./components/carousel";

function App() {
  return (
    <div className="p-0 m-0">
      <Landingpage />
      <Aboutus />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
