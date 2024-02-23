import { forecastType } from '../types'
import WeatherDetails from './WeatherDetails'
import WeatherDetailsSummary from './WeatherDetailsSummary'
import WeatherForecastTimeline from './WeatherForecastTimeline'

type Props = {
  data: forecastType
}

const Forecast = ({ data }: Props) => {
  const today = data.list[0]

  return (
    <div className="mt-5 mb-5 w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
      <div className="mx-auto w-[300px]">
        <WeatherDetails data={data} today={today} />
        <WeatherForecastTimeline data={data} />
        <WeatherDetailsSummary data={data} today={today} />
      </div>
    </div>
  )
}

export default Forecast
