import { Button } from "primereact/button";
import React, { MouseEvent, useEffect } from "react";

type ButtonCompProps = {
  label?: string;
  icon?: any;
  className?: string;
  severity?: any;
  type?: any;
  loading?: boolean;
  buttonType?: any;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const ButtonComp: React.FC<ButtonCompProps> = ({
  label = "Button", //button label
  icon = "pi pi-plus",
  className = "",
  severity = "",
  onClick,
  type = "button",
  loading = false,
  buttonType,
  disabled = false,
}) => {
  return (
    <>
      <Button
        disabled={disabled === true ? disabled : loading} // disable if loading true
        label={label}
        type={type}
        severity={severity}
        icon={loading ? "pi pi-spin pi-spinner" : icon}
        className={className}
        onClick={onClick}
        text={buttonType === "text"}
        rounded={buttonType === "rounded"}
        outlined={buttonType === "outlined"}
      ></Button>
    </>
  );
};
export default ButtonComp;
