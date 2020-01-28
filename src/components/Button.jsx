import React from "react";

export const Button = ({ name, icon, onClick }) => {
  return (
    <div className={"button"} onClick={() => onClick(name)}>
      <button name={name}>{name}</button>
      <i>{icon}</i>
    </div>
  );
};
