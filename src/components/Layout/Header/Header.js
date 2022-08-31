import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../../assets/images/logo.png";
import { BiHeart } from "react-icons/bi";
import { BiBookmarkHeart } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { watchList, wishList } = useSelector((state) => state.moviesData);
  const params = useParams();
  useEffect(() => {
    setMenuActive(false);
  }, [params]);
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <span
            onClick={() => setMenuActive(!menuActive)}
            className="menu-icon"
          >
            {!menuActive ? <MdMenu /> : <MdClose />}
          </span>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <ul className="menu">
            <div className={`main-menu ${menuActive ? "active" : null}`}>
              <li>
                <NavLink activeclassname="active" to={"/"}>
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink to={"/now_playing"}>Now Playing</NavLink>
              </li>
              <li>
                <NavLink to={"/top_rated"}>Top Rated</NavLink>
              </li>
              <li>
                <NavLink to={"/upcoming"}>Upcoming</NavLink>
              </li>
            </div>
            <li>
              <NavLink to={"/wishlist"}>
                <BiHeart />
                <span className="count">{wishList?.length}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/watchlist"}>
                <BiBookmarkHeart />
                <span className="count">{watchList?.length}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
