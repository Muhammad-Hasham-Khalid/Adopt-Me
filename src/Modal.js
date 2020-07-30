import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // create something once and refer to that element always
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // returns something that is cleanup similar to componentWillUnmount

    return () => modalRoot.removeChild(elRef.current);
  }, []); // empty array means no dependency (runs once)

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
