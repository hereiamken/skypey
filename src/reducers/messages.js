import { SEND_MESSAGE } from "../constants/action-types";
import { getMessages } from "../static-data";

export default function messages(state = getMessages(10), action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return "";
        default:
            return state;
    }
}