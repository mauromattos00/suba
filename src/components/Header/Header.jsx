import React from "react";

import SearchInput from "./SearchInput/SearchInput";
import AccountMenu from "./AccountMenu/AccountMenu";
import Logo from "./Logo/Logo";
import "./Header.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart, faShoppingCart);

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <Logo />
          <SearchInput />
          <AccountMenu />
          <div className="lists">
            <FontAwesomeIcon icon="heart" />
            <FontAwesomeIcon icon="shopping-cart" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
