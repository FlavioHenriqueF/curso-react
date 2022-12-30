import React, { cloneElement } from "react";

export default (props) => {
  return (
    <div>
      {props.children.map((elemento, i) => {
        return cloneElement(elemento, { ...props, key: i });
      })}
    </div>
  );
};
