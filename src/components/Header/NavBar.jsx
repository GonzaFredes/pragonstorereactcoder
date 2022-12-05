import { useState } from "react";
import { Link } from "react-router-dom";
import { hamburgerMenu } from "../../img";
import CartWidget from "./CartWidget";
import {
  Header,
  Logo,
  Span,
  HamburgerMenu,
  ShowHamburgerMenu,
} from "./stylesNav";

const NavBar = () => {
  const [menuHide, setMenuHide] = useState(false); 

  const handleClickMenu = () => {
    setMenuHide(!menuHide);
  };

  return (
    <Header>
      <Logo className="flex justify-start items-center">
        <Link to="/">Pragon Store™</Link>
      </Logo>
      <HamburgerMenu onClick={handleClickMenu}>
        <img src={hamburgerMenu} alt="menu" />
      </HamburgerMenu>
      <ShowHamburgerMenu menuHide={menuHide}>
        <Link to="/cart">
          <CartWidget />
        </Link>
        <ul className="flex justify-center items-center h-full md:h-16 md:w-100 bg-white">
          <li className="flex flex-col gap-10 text-center w-full uppercase font-semibold md:flex-row md:gap-3 md:relative md:right-14 md:font-light">
            <Link
              to="/category/remeras"
              className="hover:bg-slate-200 hover:shadow-md md:rounded md:px-3 md:py-1"
              id="1"
              onClick={handleClickMenu}
            >
              Remeras
            </Link>
            <Link
              to="/category/vestidos"
              className="hover:bg-slate-200 hover:shadow-md md:rounded md:px-3 md:py-1"
              id="2"
              onClick={handleClickMenu}
            >
              Vestidos
            </Link>
            <Link
              to="/category/calzado"
              className="hover:bg-slate-200 hover:shadow-md md:rounded md:px-3 md:py-1"
              id="3"
              onClick={handleClickMenu}
            >
              Calzado
            </Link>
          </li>
        </ul>
      </ShowHamburgerMenu>
    </Header>
  );
};

export default NavBar;
