import React from "react";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        className="search-input"
        type="text"
        name="text-input"
        id="text-input"
        placeholder="Digite aqui o que você quer buscar!"
      />
    );
  }
}

export default SearchInput;
