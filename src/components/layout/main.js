import React from "react";
import PropTypes from "prop-types";
import Header from "../common/header";
import Footer from "../common/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/home";
const Main = (props) => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

Main.propTypes = {};

export default Main;
