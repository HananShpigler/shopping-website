import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link className="home-link" to="/">
          Welcome To Shopping Online
        </Link>
      </div>
    </div>
  );
};

export default Header;
