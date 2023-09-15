import React from "react";

const SuccessStory = (props) => {
  const { story } = props;

  return (
    <>
      <p>{`Success Story: ` + story}</p>
      <button
        onClick={() => {
          props.randomNumberGenerator(Math.random());
        }}
      >
        Generate Number
      </button>
    </>
  );
};

export default SuccessStory;
