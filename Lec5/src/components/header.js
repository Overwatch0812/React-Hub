import React from "react";

const Header = () => {
    return (
      <div className="Head">
        <div className="left">
          <img
            alt="logo"
            src="https://exchange4media.gumlet.io/news-photo/95080-Swiggy.jpg?format=webp&w=768&dpr=1.3"
          />
        </div>
        <div className="right">
          <ol>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Cart</a></li>
          </ol>
        </div>
      </div>
    );
  };

  export default Header;