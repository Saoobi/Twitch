import React from "react";
import styled from "styled-components";

import Links from "./Links";

const Wrapper = styled.nav``;

function NavBar() {
  return (
    <nav className="NavBar">
      <Links />
    </nav>
  );
}

export default NavBar;
