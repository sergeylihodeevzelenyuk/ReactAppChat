import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { chatActions } from "../store/root-reducer";

import classes from "./Chat.module.css";

const Chat = () => {
  const chatRef = useRef();
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);

  const onMessageClick = (e) => {
    dispatch(chatActions.removeMessage(e.currentTarget.id));
  };

  if (chatRef.current) {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }

  const createUserMessage = (message) => {
    const { content, id, time } = message;

    return (
      <div
        id={id}
        key={id}
        className={classes.message}
        onClick={onMessageClick}
      >
        <p className={classes.content}>{content} </p>
        <p className={classes.time}>{time}</p>
      </div>
    );
  };

  return (
    <div className={classes.chat} ref={chatRef}>
      <div className={classes.header}></div>
      {messages.length !== 0 &&
        messages.map((message) => createUserMessage(message))}
    </div>
  );
};

export default Chat;
