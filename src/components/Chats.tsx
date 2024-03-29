import React, { Component, useEffect, useRef } from "react";
import "./Chats.css";

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is_user_msg" : ""}`}>{text}</span>
  );
};

const Chats = ({ messages }) => {
  const chatsRef = useRef();

  const scrollToBottom = () =>
    (chatsRef.current.scrollTop = chatsRef.current.scrollHeight);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="Chats" ref={chatsRef}>
      {messages.map((message) => (
        <Chat message={message} key={message.number} />
      ))}
    </div>
  );
};

export default Chats;
