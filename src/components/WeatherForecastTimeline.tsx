import { forecastType } from '../types'
import Degree from './Degree'

type componentProps = {
  data: forecastType
}

const WeatherForecastTimeline = ({ data }: componentProps) => {
  return (
    <section className="flex overflow-x-scroll mt-4 pb-2 mb-5">
      {data.list.map((item, i) => (
        <div
          key={i}
          className="inline-block text-center w-[50px] flex-shrink-0"
        >
          <p className="text-sm">
            {i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}
          </p>
          <img
            alt={`weather-icon-${item.weather[0].description}`}
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          />
          <p className="text-sm font-bold">
            <Degree temp={Math.round(item.main.temp)} />
          </p>
        </div>
      ))}
    </section>
  )
}

export default WeatherForecastTimeline
