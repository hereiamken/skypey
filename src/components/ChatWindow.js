import React, { useMemo } from "react";
import store from "../store";
import Header from "../components/Header";
import Chats from "./Chats";
import _ from "lodash";
import "./ChatWindow.css";
import MessageInput from "../containers/MessageInput";

const ChatWindow = ({activeUserId}) => {

    const state = store.getState();
    const activeUser = state.contacts[activeUserId];

    const activeMsgs = useMemo(
        () => state.messages[activeUserId], [
        state,
        activeUserId,
        ]);

    const messages = useMemo(() => _.values(activeMsgs), [activeMsgs]);
    const {typing} = state;

    return (
        <div className="ChatWindow"> 
            <Header user={activeUser} />
            <Chats messages={messages} />
            <MessageInput value={typing} />
        </div>
    );
};

export default ChatWindow;