import React from "react";

import SuccessStory from "../SuccessStory/SuccessStory";
import "./SuccessChild.css";

const SuccessChild = (props) => {
  const { name, addr, story } = props;

  return (
    <div className="container">
      <p>{name || "No Name Provided"}</p>
      <p>{addr || "No Address Provided"}</p>
      <p>{story && <SuccessStory story={story} />}</p>
    </div>
  );
};

export default SuccessChild;
