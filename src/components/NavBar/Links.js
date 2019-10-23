import React from "react";
import { Link, withRouter } from "react-router-dom";

import TwitchIcon from "../../assets/twitch-icon.svg";

function Links({ location }) {
  const items = [
    {
      id: 0,
      label: "Découvrir",
      to: "/"
    },
    {
      id: 1,
      label: "Parcourir",
      to: "/directory"
    }
  ];
  return (
    <ul className="NavBar_NavLinks">
      <li className="NavBar_NavLink_Logo">
        <Link to="/">
          <img className="Logo" src={TwitchIcon} />
        </Link>
      </li>
      {items.map(({ id, label, to }) => {
        const isActive = location.pathname === to;
        return (
          <li
            key={id}
            className={isActive ? "NavBar_NavLink_active" : "NavBar_NavLink"}
          >
            <Link to={to}>{label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default withRouter(Links);
