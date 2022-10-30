//toolkit形式
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getHomePriceData,
    getHomeHighScoreData,
    getHomeDiscountData,
    getHomeHotrecommenddestData,
    getHomeLongforData,
    getHomePlusData
} from '@/services/modules/home'
export const fetchHomeDataFn = createAsyncThunk('fetchdata', (payload, { dispatch }) => {
    getHomePriceData().then(res => {
        dispatch(changeGoodpriceFn(res))
    })
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })
    getHomeHotrecommenddestData().then(res => {
        dispatch(changeHotrecommenddestAction(res))
    })
    getHomeLongforData().then(res => {
        dispatch(changeLongforInfoAction(res))
    })
    getHomePlusData().then(res => {
        dispatch(changePlusInfoAction(res))
      })
})
const HomeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPrice: {},
        highScoreInfo: {},
        discountInfo: {},
        hotrecommenddest: {},
        longForInfo: {},
        plusInfo: {},
    },
    reducers: {
        changeGoodpriceFn(state, { payload }) {
            state.goodPrice = payload
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload
        },
        changeHotrecommenddestAction(state, { payload }) {
            state.hotrecommenddest = payload
        },
        changeLongforInfoAction(state, { payload }) {
            state.longForInfo = payload
        },
        changePlusInfoAction(state, { payload }) {
            state.plusInfo = payload
          },
    },
})
export const {
    changeGoodpriceFn,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeHotrecommenddestAction,
    changeLongforInfoAction,
    changePlusInfoAction
} = HomeSlice.actions;
export default HomeSlice.reducer