import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { chatActions } from "../store/root-reducer";

import classes from "./Chat.module.css";

const Chat = () => {
  const chatRef = useRef();
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);

  const onMessageClick = (e) => {
    dispatch(
      chatActions.removeMessage(
        e.target.attributes.getNamedItem("data-id").value
      )
    );
  };

  if (chatRef.current) {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }

  const userMessage = (params) => {
    const [content, id, time] = params;

    return (
      <div
        data-id={id}
        key={id}
        className={classes.message}
        onClick={onMessageClick}
      >
        <p data-id={id} className={classes.content}>
          {content}
        </p>
        <p data-id={id} className={classes.time}>
          {time}
        </p>
      </div>
    );
  };

  return (
    <div className={classes.chat} ref={chatRef}>
      <div className={classes.header}></div>
      {messages.length !== 0 &&
        messages.map((message) =>
          userMessage([message.content, message.id, message.time])
        )}
    </div>
  );
};

export default Chat;
