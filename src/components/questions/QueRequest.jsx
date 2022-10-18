import React, { useState } from 'react'
import "./QueRequest.css";

const QueRequest = (props) => {
  const [doneOrNot, setDoneOrNot] = useState(false);
  
  function handleDoneChange(e) {
    setDoneOrNot(!doneOrNot);
    props.getKeyAndUpdate(Object.values(props.question)[0], "Trie", "yes");
  }

  return (
    <div className="cmnDiv">
      <input type="checkbox" onChange={handleDoneChange}></input>
      <button className="queBtn">
        {Object.values(props.question)[1]["Problem: "]}
      </button>
      <button className="hiBtn">
        {Object.values(props.question)[1]["Done [yes or no] "]}
      </button>
    </div>
  );
}

export default QueRequest