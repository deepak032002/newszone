import constant from '../constant/index'

const { SET_COUNTRY, GET_NEWS } = constant

const initialState = {
    country: '',
    news: []
}

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRY:
            return { ...state, country: action.payload }

        case GET_NEWS: 
            return {...state, news: action.payload}

        default:
            return { ...state }
    }
}

export default homePageReducer