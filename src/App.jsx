import React, { useEffect } from "react";

// Components
import ScrollToTop from "./components/ScrollToTop";
import HomeLightAnimation from "./views/home-version/HomeLightAnimation";

// Styles
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color= "10, 120, 220"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.4}
      />
      <ScrollToTop />
      <HomeLightAnimation />
    </>
  );
};

export default App