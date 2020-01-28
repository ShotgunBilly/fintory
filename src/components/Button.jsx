import React from "react";

const Button = ({ name, icon, onClick }) => {
  return (
    <div className={"button"} onClick={() => onClick(name)}>
      <button name={name}>{name}</button>
      <i>{icon}</i>
    </div>
  );
};

export default Button;
