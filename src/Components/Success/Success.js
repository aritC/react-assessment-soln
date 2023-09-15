import React, { Component } from "react";

import "./Success.css";
import SuccessChild from "./SuccessChild/SuccessChild";

export default class Success extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomNumber: 0,
    };
  }

  randomNumberGenerator = (randomNum) => {
    this.setState({
      randomNumber: randomNum,
    });
  };

  render() {
    let quotes = [
      "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
      "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
      "Success is not in what you have, but who you are. - Bo Bennett",
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
      "Success is walking from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
      "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
      "Success is not the result of spontaneous combustion. You must set yourself on fire. - Arnold H. Glasow",
      "Success is not just about making money. It's about making a difference. - Unknown",
      "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    ];

    return (
      <>
        <div className="quotes">
          {quotes.map((quote, i) => {
            return (
              <p className="quote" key={i}>
                {quote}
              </p>
            );
          })}
        </div>
        <SuccessChild />
        <SuccessChild name="Arit" addr="Tempe,AZ" />
        <SuccessChild
          name="Arit"
          addr="Tempe,AZ"
          story="This is a success story."
          randomNumberGenerator={this.randomNumberGenerator}
        />
        {this.state.randomNumber !== 0 ? this.state.randomNumber : ""}
      </>
    );
  }
}
