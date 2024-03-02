import { useFetch } from "../../hooks/useFetch";

type TypeSelector = {
  setOptionValue: React.Dispatch<React.SetStateAction<number>>;
  optionValue: number;

};

export default function Selector({setOptionValue, optionValue} : TypeSelector) {
  const BASE_URL = 'https://60816d9073292b0017cdd833.mockapi.io/modes';
  const { data } = useFetch(BASE_URL);

  const handleOptionClick = (val: number) => {
    setOptionValue(val);
  };

  return (
    <select name="" id="" value={optionValue} onChange={(e) => handleOptionClick(parseInt(e.target.value))}>
      {data.map(option => (
        <option key={option.field} value={option.field}>
          {option.name}
        </option>
      ))}
    </select>
  )
}
