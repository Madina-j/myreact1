import React from "react";
import "./index.css";
import Navbarbutton from "../navbarbutton";

const Navbar = () => {
  return (
    <div>
      <Navbarbutton text={"A"} />
      <Navbarbutton text={"B"} />
      <Navbarbutton text={"C"} />
      <Navbarbutton text={"D"} />
    </div>
  );
};

export default Navbar;
