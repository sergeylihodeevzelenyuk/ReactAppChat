import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { chatActions } from "../store/root-reducer";

import { getMessageTime } from "../halpers";

import classes from "./Input.module.css";

const Input = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    const message = inputRef.current.value;

    if (message.trim() === "") {
      return;
    }

    const userMessage = {
      content: message,
      time: getMessageTime(),
      id: Math.random().toString(16).slice(2),
    };

    dispatch(chatActions.addMessage(userMessage));

    inputRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <input ref={inputRef} />
      <button></button>
    </form>
  );
};

export default Input;
