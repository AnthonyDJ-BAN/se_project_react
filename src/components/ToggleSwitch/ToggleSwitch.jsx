import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContexts";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTempUnit } = useContext(
    CurrentTempUnitContext,
  );

  console.log(currentTempUnit);
  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <span className="toggle-switch__slider"></span>
      <span
        className={`toggle-switch__text toggle-switch__text_F ${currentTempUnit === "F" ? "toggle-switch__text_white" : ""}`}
      >
        F
      </span>
      <span
        className={`toggle-switch__text toggle-switch__text_C ${currentTempUnit === "C" ? "toggle-switch__text_white" : ""}`}
      >
        C
      </span>
    </label>
  );
}
