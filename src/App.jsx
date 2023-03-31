import React from "react";
import Browse from "./components/Browse/Browse";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Profile />
      <Browse />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
