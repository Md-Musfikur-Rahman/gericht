import React from "react";

import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => (
  <div className="app__newsletter section__padding">
    <SubHeading title="Newaletter" />
    <h1 className="headtext__cormorant">Subscribe to our newssletter</h1>
    <p>And never miss latest Updates</p>

    <div className="app__intput">
      <input type="email" name="email" id="email" placeholder="Email Address" />

      <button type="button" className="custom__button">
        Subscribe
      </button>
    </div>

    <a href="/" className="slide-bottom line">
      <div className="line1" />
      <a href="/">Top</a>
    </a>
  </div>
);

export default Newsletter;
