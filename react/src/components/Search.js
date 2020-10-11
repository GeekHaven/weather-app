import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div class="search-box">
      <h2>Search by City Name</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required=""></input>
          <label>City</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Search
        </a>
      </form>
    </div>
  );
};

export default Search;
