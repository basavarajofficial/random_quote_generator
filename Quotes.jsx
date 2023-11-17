import { useState } from "react";
import { quotes } from "./src/data";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function Quotes() {
  const [index, setIndex] = useState(0);

  const colors = ["red", "green", "yellow", "blue", "magenta", "cyan"];
  let colorIndex = Math.floor(Math.random() * colors.length);

  const { name, content } = quotes[index];

//   const myStyle = {
//     backgroundColor: colors[colorIndex],
//   };

  return (
    <div id="main" >
      <div id="quote-box">
        <h2 id="text" style={{color: colors[colorIndex]}}>{content}</h2>
        <p id="author"> - {name}</p>

        <div className="footer">
        <div >
          <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
            <FaXTwitter />
            <FaFacebookSquare />
          </a>
        </div>

        <button
          id="new-quote"
          onClick={() => setIndex(Math.floor(Math.random() * quotes.length))}
        >
          New Quote
        </button>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
