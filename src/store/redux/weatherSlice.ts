import axios from "axios"

import { createAppSlice } from "store/createAppSlice"
import { WeatherSliceState } from "./types"

const weatherInitialState: WeatherSliceState = {
  data: { tem: "", city: "", iconUrl: "" },
  error: undefined,
  status: "default",
}

export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState: weatherInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (cityName: string, thunkApi) => {
        const APP_ID = "22d4abc9872444539b18aac1e89bba96"
        try {
          const result = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}&units=metric&lang=`,
          )

          const { main, weather, name } = result.data
        

          return {
            temp: main.temp,
            city: name,
            iconUrl: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
          }
        } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        pending: (state: WeatherSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: WeatherSliceState, action: any) => {
          state.data = action.payload
          state.status = "success"
        },
        rejected: (state: WeatherSliceState, action: any) => {
          state.error = action.payload
          state.status = "error"
        },
      },
    ),
    clearWeatherData: create.reducer(() => weatherInitialState),
  }),
  selectors: {
    weatherData: (state: WeatherSliceState) => state.data,
    weatherError: (state: WeatherSliceState) => state.error,
    weatherStatus: (state: WeatherSliceState) => state.status,
  },
})

export const weatherActions = weatherSlice.actions
export const weatherSelectors = weatherSlice.selectors
