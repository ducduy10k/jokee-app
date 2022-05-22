import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/home";
const Main = () => {
  return (
    <div className="main">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Main;
