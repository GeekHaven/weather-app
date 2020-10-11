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
    // <div class="container">
    // <h1>Get Weather updates through mail</h1>
    // <hr />
    // <form>
    //   <h3>One Email per day only</h3>
    //   <input type="text" placeholder="Name" name="Name" /><br /><br />
    //   <input type="email" placeholder="Email" name="Email" />
    //   <br />
    //   <br />
    //   <p>Unsubscribe at any time</p>
    //   <br />
    //   <br />
    //   <button type="submit" class="btn">Subscribe</button>
    // </form>
    // </div>
  );
};

export default Subscribe;
