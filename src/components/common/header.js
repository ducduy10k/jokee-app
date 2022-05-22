import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <div className="header">
        <div className="logo-header">
        <img src="https://gudlogo.com/wp-content/uploads/2019/04/logo-hoa-huong-duong-11-1030x772.png"  alt="logo"/>
      </div>
      <div className="info">
        <div className="profile">
          <div style={{fontSize:'.8rem', color:'#b0b0b0'}}>Handicrafted by</div>
          <div className="profile-name">Jim HLS</div>
        </div>
        <div className="avatar">
          <img src="https://hoayeuthuong.com/cms-images/flower-meaning/434019_y-nghia-hoa-huong-duong.jpg"  alt="avatar"/>
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {}


export default Header;
