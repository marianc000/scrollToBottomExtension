import { setNextState } from "../state/states.js";

export function onClicked({ id }) {
    console.log('>onClicked', id);
    setNextState(id);
};