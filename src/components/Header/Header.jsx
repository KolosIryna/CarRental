import React from "react";
// import { NavLink } from "react-router-dom";

import { HeaderStyled } from "./StyledHeader.styled";
import Car from "../../image/car.png";

export const Header = () => {
  return (
    <HeaderStyled>
      <img src={Car} alt="Car" width="40px" />
      <nav>
        {/* <NavLink to="/catalog" className="header_link">
          Catalog
        </NavLink>
        <NavLink to="/favorite" className="header_link">
          Favorite
        </NavLink> */}
        <a href="/catalog">Catalog</a>
        <a href="/favorite">Favorite</a>
      </nav>
    </HeaderStyled>
  );
};
