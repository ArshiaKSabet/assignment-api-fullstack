import React, { useState } from "react";
import "./ClickMe.css"

function ClickMe() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const handleClick = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  return (
    <div>
      <button className="click" onClick={handleClick}>Click me!</button>
      {isBoxOpen && <div className="box"><span><h2>Questions I remember I failed at the interview and how I should've answered them</h2>
      <p><span className="question">1. If you would like to add something (for example another field to every object in the json-data), what would you do?</span>
        </p>
        <p className="wrong-answer">What I answered: "I would convert it to a JSON, but I'm not sure"
          </p>
        <p><span className="correct-answer">What I should've answered: </span>Since the top-level of a JSON-text can be an array, I would've chosen to go with the Array.map method, which creates a new array with the new results, with each index modified as you wanted.
          </p>
        <p><span className="question">2. How would you add the spaces for the rendered children-components?</span>
        </p>
        <p className="wrong-answer">What I answered: "I think there is an attribute called line-spacing.."🤯
          </p>
        <p><span className="correct-answer">What I should've answered: </span> The nested elements such as divs(example), creates an indentation effect where each nested element is a part of the hierarchy.
          </p>

          </span>
          </div>}
    </div>
  );
}

export default ClickMe;