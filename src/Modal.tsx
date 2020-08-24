import React, { useEffect, useRef, FunctionComponent } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal: FunctionComponent = ({ children }) => {
  // create something once and refer to that element always
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);

    // returns something that is cleanup similar to componentWillUnmount

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []); // empty array means no dependency (runs once)

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
