import { useState } from 'react'

function App() {
  const [term, setTerm] = useState('')

  const onInputChange = (e) => {
    console.log(e.target.value)
  }

  // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
        <h1 className="text-4xl font-thin">
          Weather
          <span className="font-black">Forecast</span>
        </h1>
        <p>
          Enter below a plca you want to know the weather of and select and
          option from the dropdown
        </p>

        <div className="flex mt-10 md:mt-4">
          <input
            type="text"
            value={term}
            onChange={onInputChange}
            className="px-2 py-1 rounded-l-md border-2 border-white"
          />

          <button className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer">
            Search
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
