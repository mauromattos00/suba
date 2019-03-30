import React from "react";

import "./UserIcon.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faUserAlt);

class UserIcon extends React.Component {
  render() {
    return (
      <div className="user-icon">
        <div className="user-icon__border">
          <FontAwesomeIcon icon="user-alt" />
        </div>
      </div>
    );
  }
}

export default UserIcon;
