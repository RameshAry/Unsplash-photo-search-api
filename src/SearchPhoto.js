import { React, useEffect, useState } from "react";
import axios from "axios";

function SearchPhoto() {
  const [image, setImage] = useState([]);
  const [query, setQuery] = useState("");

  const searchPhotos = async (e) => {
    e.preventDefault();
  };

  const getImage = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=jUSBJj7LT_SHQbbxOamIn6TlLO1a6Abo0ZZAmyhf7HA`
      )
      .then((res) => {
        setImage(res.data.results);
      });
  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Type something that comes in your mind...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="button"
          onClick={getImage}
          //   style={"padding: 20px"}
        >
          Search
        </button>
      </form>

      <div className="card-list">
        {image.map((pic) => (
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchPhoto;
