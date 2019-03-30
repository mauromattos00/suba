import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./SearchInput.scss";

library.add(faSearch);

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          name="text-input"
          id="text-input"
          placeholder="O que você deseja buscar?"
        />
        <button className="search-btn">
          <FontAwesomeIcon icon="search" />
        </button>
      </div>
    );
  }
}

export default SearchInput;
