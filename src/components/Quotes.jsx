import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";


function Quotes() {
  const [quote, setQuote] = useState([]);

  const options = {
    method: "GET",
    url: "https://quotes15.p.rapidapi.com/quotes/random/",
    headers: {
      "X-RapidAPI-Key": "043947a0dbmsh4168cecb8e2f79ep195c99jsne4e8306e33bf",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };

  let getData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);

      setQuote([response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div >
      {quote?.map((item) => (
        <div className="content" key={item.id}>
          <h2 id="text">{item.content}</h2>
          <p id="author"> - {item.originator.name}</p>
        </div>
      ))}
        <div id="tweet-quote">
          <a href="twitter.com/intent/tweet" target="_blank">Twitter</a>
        </div>

        <button id="new-quote" onClick={getData}>New Quote</button>


    </div>
  );
}

export default Quotes;
