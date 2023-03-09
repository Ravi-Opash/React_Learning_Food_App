import React, { Fragment } from "react";
import style from "./Model.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={style.backdrop}></div>;
};

const ModelOverlay = (props) => {
  return (
    <div className={style.model}>
      <div className={style.content}>{props.childern}</div>
    </div>
  );
};

const x = document.getElementById('overlays');

const Modal = (props) => {
  <Fragment>
    {ReactDOM.createPortal(<Backdrop />, x)}
    {ReactDOM.createPortal(<ModelOverlay>{props.childern}</ModelOverlay>, x)}
  </Fragment>;
};

export default Modal;
