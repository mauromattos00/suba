import React from "react";

import "./AccountMenu.scss";
import UserIcon from "./UserIcon/UserIcon";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown);

class AccountMenu extends React.Component {
  render() {
    return (
      <div className="account-menu">
        <UserIcon />
        <div className="dropdown-container">
          <span className="dropdown-container__greeting">Olá, Mauro</span>
          <div className="dropdown-container__my-account">
            <span>Minha conta</span>
            <FontAwesomeIcon icon="chevron-down" />
          </div>
        </div>
      </div>
    );
  }
}

export default AccountMenu;
