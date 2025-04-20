import refreshIcon from "@/assets/refresh.svg";
import { ButtonProps } from "./button.types";
import "./Button.scss";

const Button = ({ handleRefresh, children }: ButtonProps) => {
  return (
    <button className="btnStyling" onClick={handleRefresh}>
      <div className="refresh-wrapper">
        <img
          src={refreshIcon}
          className="refreshIconStyle"
          alt="Refresh icon"
        />
        <span className="btnText">{children}</span>
      </div>
    </button>
  );
};

export default Button;
