import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-desc">
           This website is created as part of HLsolutions program. The materials
        contained on this website are provided for general infomation only and
        do not constitute any form of advice. HLS assumes no responsibility for
        the accuracy of any particular statement and accepts no liability for
        any loss or damage which may arise from reliance on the informattion
        contained on this site
        </div>
         <div className="copyright">
      Copyright © 2021 HLS 
      </div>
      </div>
    </div>
  );
};
Footer.propTypes = {}


export default Footer;
