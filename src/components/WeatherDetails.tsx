import { forecastType } from '../types'
import Degree from './Degree'

type todayType = forecastType['list'][0]

type componentProps = {
  data: forecastType
  today: todayType
}

const WeatherDetails = ({ data, today }: componentProps) => {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-black">
        {data.name} <span className="font-thin">{data.country}</span>
      </h2>

      <h1 className="text-4xl font-extrabold">
        <Degree temp={Math.round(today.main.temp)} />
      </h1>

      <p className="text-sm">
        {today.weather[0].main} ({today.weather[0].description})
      </p>
      <p className="text-sm">
        H: <Degree temp={Math.ceil(today.main.temp_max)} /> L:{' '}
        <Degree temp={Math.floor(today.main.temp_min)} />
      </p>
    </section>
  )
}

export default WeatherDetails
