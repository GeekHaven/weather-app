import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div class="loginModule">
      <div class="extraBorder">
        <form class="loginForm">
          <div class="welcome">Get weather updates</div>
          <input type="text" name="name" class="sub_name" placeholder="Name" />
          <br />
          <input type="email" name="email" class="sub_email" placeholder="Email" />
          <br />
          <input type="submit" class="sub_btn" value="Subscribe" />
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
