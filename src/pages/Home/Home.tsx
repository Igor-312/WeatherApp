import Input from "components/Input/Input"
import Button from "components/Button/Button"
import { HomePageWrapper, WeatherForm } from "./styles"
import { useFormik } from "formik"
import { WeatherFormNames } from "./types"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { weatherActions, weatherSelectors } from "store/redux/weatherSlice"

function Home() {
  const dispatch = useAppDispatch()

  const weatherData = useAppSelector(weatherSelectors.weatherData)
  const weatherStatus = useAppSelector(weatherSelectors.weatherStatus)
  const weatherError = useAppSelector(weatherSelectors.weatherError)

  const formik = useFormik({
    initialValues: {
      cityName: "",
    } as WeatherFormNames,
    onSubmit: values => {
      dispatch(weatherActions.getWeather(values.cityName))
    },
  })

  return (
    <HomePageWrapper>
      <WeatherForm onSubmit={formik.handleSubmit}>
        <Input
          name="cityName"
          placeholder="Enter city name"
          value={formik.values.cityName}
          onChange={formik.handleChange}
        />
        <Button name="Search" type="submit" />

        {weatherStatus === "loading" && <p>Loading...</p>}
        {weatherError && <p style={{ color: "red" }}>{weatherError}</p>}

        {weatherStatus === "success" && weatherData.city && (
          <div>
            <h3>{weatherData.city}</h3>
            <p>Temperature: {weatherData.tem}°C</p>
            <img src={weatherData.iconUrl} alt="weather icon" />
          </div>
        )}
        </WeatherForm>
    </HomePageWrapper>
  )
}

export default Home
