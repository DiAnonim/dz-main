import { FAILED, FETCHING, GET_MOBS, SUCCEED } from "../actionTypes";

export const minecraftGetMobsAction = (payload) => ({
    type: GET_MOBS + FETCHING,
    payload,
})

export const minecraftGetMobsSucceed = (payload) => ({
    type: GET_MOBS + SUCCEED,
    payload,
})

export const minecraftGetMobsFailed = (payload) => ({
    type: GET_MOBS + FAILED,
    payload,
})