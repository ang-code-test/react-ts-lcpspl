import * as React from "react";
import { useEffect, useState } from "react";

function GiphySearch() {
  const inputState = useState("");
  const [results, setResults] = useState({ data: [] });

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=zBemdWVxDKHbIjfMKLTNVb2o210vnIPh&q=" +
        inputState[0] +
        "+&limit=25&offset=0&rating=g&lang=en"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResults(data);
      });
  }, [inputState]);

  return (
    <div>
      <div className="my-5">
        <label htmlFor="search" className="form-label">
          Search for a Gif
        </label>
        <input
          className="form-control"
          value={inputState[0]}
          onChange={function (event) {
            inputState[1](event.target.value);
          }}
        />
      </div>
      <div className="row">
        {results.data.map((item: any) => {
          return (
            <div className="col-3">
              <img className="img-fluid" src={item.images["480w_still"].url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GiphySearch;
