import "./Header.css";
import logo from "../../assets/wtwr.svg";
import avatar from "../../assets/avatar.svg";

function Header({ handleAddBtn, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" alt="WTWR logo" src={logo} />
      <p className="header__meta">
        {currentDate} {weatherData.city}
      </p>
      <button
        onClick={handleAddBtn}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
