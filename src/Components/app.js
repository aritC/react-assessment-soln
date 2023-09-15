import React, { Component } from "react";

import "./app.css";
import Success from "./Success/Success";
import UserSignIn from "./UserSignIn/UserSignIn";
import Product from "./Product/Product";

//Assessment #3 react and its fundamentals - 15/09/2023

/*
1. what is react and its role for single page application
 React is a JavaScript library known for its role in creating responsive and dynamic user interfaces. It excels in SPAs due to its component-based structure, which enables developers to build modular and reusable UI elements. React's Virtual DOM ensures efficient updates, improving performance as content changes dynamically without full page reloads. Additionally, React's state management, routing capabilities, and support for Server-Side Rendering (SSR) contribute to a seamless and highly interactive SPA user experience. Its vast ecosystem of tools and libraries further enhances its suitability for SPAs.
*/

/*
2. how react is faster compared to other javascript frameworks
React is often faster compared to some other JavaScript frameworks due to its use of a Virtual DOM for efficient updates, a component-based architecture for modularity and reusability.
*/

/*
3. what is virtual dom
The Virtual DOM (Document Object Model) in React is a fundamental concept that enhances performance by minimizing direct manipulation of the actual DOM. It's a lightweight copy of the real DOM and serves as an intermediary layer between the application's state and the browser's rendering engine. React uses the Virtual DOM to efficiently update only the parts of the actual DOM that have changed, reducing unnecessary re-renders and improving overall application speed. This abstraction allows developers to write declarative code, describing how the UI should look in different states, while React takes care of the underlying optimizations for efficient updates.
*/

/*
4. How react renders dom in conservative manner
Ans- React renders the DOM in a conservative manner by creating a virtual DOM (VDOM) that represents the desired state of the UI. When changes occur due to component state or props updates, React calculates the difference between the current VDOM and the previous one. Finally, React efficiently applies the necessary minimal updates to the real DOM, reducing performance overhead and optimizing the rendering process.
*/

//5. create a class component named - Success and show some quotes on success in its
//Success.js;

//6. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
//SuccessChild.js

//7. create SuccessStory as another component, pass this as props in SuccessChild from Success component
//SuccessStory.js

//8. create UserSignIn component using uncontrolled way, should be class component
//UserSignIn.js

//9. create Product component to accept ProductName and ProductPrice
//Product.js

//10. pass a random value from SuccessStory component back to Success
//Success.js

export default class Application extends Component {
  render() {
    return (
      <>
        <h1>React Assessment</h1>
        <Success />
        <UserSignIn />
        <Product
          productName={"Logitech G ProX Superlight"}
          productPrice={"140.00"}
        />
      </>
    );
  }
}
