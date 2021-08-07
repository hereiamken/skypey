import React from "react";
import { setTypingValue, sendMessage } from "../action";
import store from "../store";
import "./MessageInput.css";

const MessageInput = ({value})=> {

    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    };

    const state = store.getStore();

    const handleSubmit = e => {
        e.preventDefault();
        const { typing, activeUserId } = state;
        store.dispatch(sendMessage(typing, activeUserId));
    };

    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input 
                className="Message_input" 
                onChange={handleChange}
                value={value}
                placeholder="Write a message" />
        </form>
    );
};

export default MessageInput; 