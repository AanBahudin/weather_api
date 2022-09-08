const reducer = (state, action) => {
    if (action.type === 'SET_SEARCH') {
        return {...state, searchValue: action.payload}
    }
    if (action.type === 'GET_ALL_WEATHER') {
        return {...state, allWeather: action.payload}
    }
    if (action.type === 'GET_SINGLE_WEATHER') {
        return {...state, loading: false, singleWeather: action.payload.singleWeather, forecastInfo: action.payload.forecastResponse}
    }
    if(action.type === 'SET_LOADING') {
        return {...state, loading: action.payload}
    }
    if(action.type === 'SET_SUGGEST'){
        return {...state, suggestBox: action.payload}
    }
    if(action.type === 'SET_THEME') {
        return {...state, darkTheme: action.payload}
    }
}


export default reducer