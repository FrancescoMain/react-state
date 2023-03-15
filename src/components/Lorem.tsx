import React, { ReactNode, useState } from "react";
import styles from "./Lorem.module.css";

interface Props {
  children: string;
  charLenght?: number;
}

const Lorem = ({ children, charLenght = 75 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (isExpanded === true) {
    return (
      <div>
        {children}
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "less" : "more"}
        </button>
      </div>
    );
  } else {
    const text = isExpanded ? children : children.substring(0, charLenght);
    return (
      <div>
        {text}...{" "}
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "less" : "more"}
        </button>
      </div>
    );
  }
};

export default Lorem;
