import { ChangeEvent, useEffect, useState } from 'react'
import { forecastType, optionType } from '../types'

const useForecast = () => {
  const [term, setTerm] = useState<string>('')
  const [city, setCity] = useState<optionType | null>(null)
  const [options, setOptions] = useState<[]>([])
  const [forecast, setForecast] = useState<forecastType | null>(null)

  const getSearchOptions = (value: string) => {
    fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/geo/1.0/direct?q=${value.trim()}&limit=5&lang=en&appid=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setTerm(e.target.value)

    if (value === '') return
    getSearchOptions(value)
  }

  const getForecast = (city: optionType) => {
    fetch(
      `${import.meta.env.VITE_BASE_URL}/data/2.5/forecast?lat=${city.lat}&lon=${
        city.lon
      }&appid=${import.meta.env.VITE_API_KEY}
		`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastDta = { ...data.city, list: data.list.slice(0) }

        setForecast(forecastDta)
      })
      .catch((err) => console.log(err))
  }

  const onSubmit = () => {
    if (!city) return
    getForecast(city)
  }

  const onOptionSelect = (option: optionType) => {
    setCity(option)
  }

  useEffect(() => {
    if (city) {
      setTerm(city.name)
      setOptions([])
    }
  }, [city])

  return {
    term,
    onInputChange,
    onOptionSelect,
    options,
    onSubmit,
    forecast,
  }
}

export default useForecast
