import constant from '../constant/index'
import axios from 'axios'

const { GET_NEWS, SET_COUNTRY } = constant

export const setCountry = (id) => {
    return {
        type: SET_COUNTRY,
        payload: id
    }
}

export const getNews = () => async (dispatch, getState) => {

    const {country} = getState()
    console.log(getState(), country);
    const res = await axios(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=ac98e766a9bd4379a75f2396bb7786a6`)
    console.log(res);

    dispatch({
        type: GET_NEWS,
        payload: res.data
    })
}