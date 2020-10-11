import React from "react";
import "./styles.css";
const Subscribe = () => {
  return (
    <div class="box">
      <form>
        <span class="text-center">Get updates about weather</span>
        <div class="input-container">
          <input type="text" required />
          <label>Name</label>
        </div>
        <div class="input-container">
          <input type="email" required />
          <label>Email</label>
        </div>
        <button type="button" class="btn">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
