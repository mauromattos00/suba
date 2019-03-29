import React from "react";
import "./Header.scss";

import Logo from "./Logo/Logo";
import SearchInput from "./SearchInput/SearchInput";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <Logo />
        <SearchInput />
      </header>
    );
  }
}

export default Header;
