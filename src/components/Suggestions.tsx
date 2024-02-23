import { optionType } from '../types'

type componentProps = {
  options: []
  onSelect: (option: optionType) => void
}

const Suggestions = ({ options, onSelect }: componentProps) => {
  return (
    <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
      {options.map((option: optionType, index: number) => {
        return (
          <li key={option.name + '-' + index}>
            {' '}
            <button
              onClick={() => onSelect(option)}
              className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
            >
              {option.name}, {option.country}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Suggestions
