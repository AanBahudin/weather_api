import '../styles/globals.css'
import {WeatherProvider} from '../context/weatherContext'

function MyApp({ Component, pageProps }) {
  return (
    <WeatherProvider>
      <Component {...pageProps} />
    </WeatherProvider>
  )
}

export default MyApp
