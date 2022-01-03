import React, { Fragment } from "react";
import classes from "./Modal.module.css";

import ReactDOM from "react-dom";

import Card from "../Card/Card";

const Backdrop = (props) => {
  return <div className={classes.overlay} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <Card className={classes.additionalContent}>{props.children}</Card>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClose}>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
      {/* <div className={classes.overlay} onClick={props.onClose}></div> */}
    </Fragment>
  );
};

export default Modal;
