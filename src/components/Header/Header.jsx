import "./Header.css";
import logo from "../../assets/wtwr.svg";
import avatarDefault from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link, NavLink } from "react-router-dom";

function Header({ handleAddBtn, weatherData }) {
  if (!weatherData) return null;

  const username = "Terrence Tegegne";
  const avatar = avatarDefault;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img className="header__logo" alt="WTWR logo" src={logo} />
      </Link>

      <p className="header__meta">
        {currentDate}, {weatherData.city}
      </p>

      <div className="header__user-container">
        <ToggleSwitch />

        <button
          onClick={handleAddBtn}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add Clothes
        </button>

        <NavLink to="/profile" className="header__user-link">
          <p className="header__username">{username}</p>
          {avatar ? (
            <img src={avatar} alt={username} className="header__avatar" />
          ) : (
            <span className="header__avatar header__avatar_none">
              {username?.toUpperCase()[0] || ""}
            </span>
          )}
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
