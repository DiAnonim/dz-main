import { FETCHING, SUCCEED, FAILED, GET_MOBS } from "../actionTypes";

const initalState = {
    isLoading: false,
    statusMessage: "",
    mobs: [],
}

const minecraftReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_MOBS + FETCHING:
            console.log(1);
            return state;

        case GET_MOBS + SUCCEED:
            console.log(2);
            return state;

        default:
            return state;

    }

}

export default minecraftReducer;