import { SET_TYPING_VALUE } from "../constants/action-types";

export default function typing(state= "", action){
    switch (action.type) {
        case SET_TYPING_VALUE:
            return SET_TYPING_VALUE;
        default:
            return state;
    }
}