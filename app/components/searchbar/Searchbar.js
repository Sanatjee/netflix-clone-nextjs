import WhiteSearchIcon from "@/public/assets/WhiteSearchIcon";
import React, { useState } from "react";
import searchbarStyle from "./searchbar.module.css";
const Searchbar = ({ show }) => {
  const [showBar, setShowBar] = useState(show);

  const searchBarStyle = showBar
    ? { position: "absolute", padding: "5px" }
    : {};

  const toggleSearchBar = () => {
    setShowBar(!showBar);
  };
  return (
    <div className={searchbarStyle.container}>
      <div onClick={toggleSearchBar}>
        <WhiteSearchIcon style={searchBarStyle} />
      </div>
      {showBar && (
        <input type='text' placeholder='Titles, people, genre' name='search' />
      )}
    </div>
  );
};

export default Searchbar;
