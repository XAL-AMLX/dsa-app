import React from "react";
import { Link } from "react-router-dom";
import "./Heading.css";

const HeadingList = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="/bt">About</Link>
      <Link to="/settings">Settings</Link> */}

      <div className="divbtn">
        <button className="bigbtn">
          <Link to="/bman">BitManipulation</Link>
        </button>
        <button className="bigbtn">
          <Link to="/trie">Trie</Link>
        </button>
        <button className="bigbtn">
          <Link to="/matrix">Matrix</Link>
        </button>
        <button className="bigbtn">
          <Link to="/graph">Graph</Link>
        </button>
      </div>

      <div className="divbtn">
        <button className="bigbtn">
          <Link to="/arrayquestions">Array</Link>
        </button>
        <button className="bigbtn">
          <Link to="/ll">LinkedList</Link>
        </button>
        <button className="bigbtn">
          <Link to="/ss">Search n' Sort </Link>
        </button>
        <button className="bigbtn">
          <Link to="/sq">Stacks n' Queues </Link>
        </button>
      </div>

      <div className="divbtn">
        <button className="bigbtn">
          <Link to="/string">string</Link>
        </button>
        <button className="bigbtn">
          <Link to="/heap">Heap</Link>
        </button>
        <button className="bigbtn">
          <Link to="/dp">DynamicProgramming</Link>
        </button>
        <button className="bigbtn">
          <Link to="/greedy">Greedy</Link>
        </button>
      </div>
    </div>
  );
};

export default HeadingList;
