import { combineReducers } from "redux";
import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserid";
import messages from "./messages";
import typing from "./typing";

export default combineReducers({
    user,
    contacts,
    activeUserId,
    messages,
    typing,
});