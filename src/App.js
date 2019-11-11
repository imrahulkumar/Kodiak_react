import React from 'react';
import Header from "../src/header/header"
import Home from "../src/components/home/home"
import Footer from "../src/footer/footer"
import AboutUs from "../src/components/about-us/about"
import Contact from "../src/components/contact/contact"
import Portfolio from "../src/components/portfolio/portfolio"

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      {/* <AboutUs /> */}
      {/* {<Contact />} */}
      <Portfolio />
      <Footer />

    </div>
  );
}

export default App;
