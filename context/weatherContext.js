import axios from 'axios'
import React, { useEffect, useReducer, useContext } from 'react'
import reducer from '../reducer/weatherReducer'

const initialState = {
    allWeather: [],
    singleWeather: [],
    searchValue: '',
    loading: false,
    suggestBox: false
}

const WeatherContext = React.createContext()

export const WeatherProvider = ({children}) => {

    // VARIABELS
    const [state, dispatch] = useReducer(reducer, initialState)
    const baseurl = 'http://api.weatherapi.com/v1'


    //? INPUT HANDLER

    const handleSearch = (value) => {

        dispatch({type: 'SET_SEARCH', payload: value})
    }


    //! FETCHING DATA FUNCTION

    const getAllWeather = async() => {
        try {
            if(state.searchValue && state.searchValue.length >= 0) {
                handleLoading(true)
                const response = await axios.get(`${baseurl}/search.json?key=${process.env.API_KEY}&q=${state.searchValue}`)
                dispatch({type: 'GET_ALL_WEATHER',payload: response.data})
                handleLoading(false)
            }
            return
        } catch (error) {
            handleLoading(false)
        }
    }

    const getSingelWeather = async(name) => {
        handleLoading(true)
        try {
            const singleWeather = await axios.get(`${baseurl}/current.json?key=${process.env.API_KEY}&q=${name}&aqi=yes`)
            console.log(singleWeather);
            dispatch({type: 'GET_SINGLE_WEATHER', payload: singleWeather.data})
        } catch (error) {
            handleLoading(false)
        }
    }


    //? UI HANDLER

    const handleLoading = (value) => {
        dispatch({type: 'SET_LOADING', payload: value})
    }

    const handleSuggestionBlock = (value) => {
        if(state.searchValue >= 3) {
            dispatch({type: 'SET_SUGGEST', payload: true})    
        }
    }




    useEffect(() => {
        getAllWeather()
    }, [state.searchValue])

    return (
        <WeatherContext.Provider value={{
            ...state,
            handleSearch,
            getAllWeather,
            getSingelWeather,
            handleSuggestionBlock
        }}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeatherContext = () => {
    return useContext(WeatherContext)
}