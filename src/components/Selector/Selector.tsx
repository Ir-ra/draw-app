import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL } from '../../../config';
import up from '../../assets/selector_up.svg';
import down from '../../assets/selector_down.svg';

type TypeSelector = {
  setOptionValue: React.Dispatch<React.SetStateAction<number | null>>
  optionValue: number | null
};

export default function Selector({ setOptionValue, optionValue }: TypeSelector) {
  const { data } = useFetch(BASE_URL);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (val: number) => {
    setOptionValue(val);
    setIsOpen(false);
  };

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const selectedOptionName = data.find(option => option.field === optionValue)?.name;

  return (
    <div className="selector">
      <div className="selector__title-container" onClick={toggling}>
        <p className="selector__title">
          {selectedOptionName ? selectedOptionName : 'Pick mode'}
        </p>
        <span className="selector__title--arrow">
          {isOpen ? (
            <img src={up} alt="selector arrow up" />
          ) : (
            <img src={down} alt="selector arrow down" />
          )}
        </span>
      </div>

      {isOpen && (
        <div className="selector__container">
          <ul className="selector__list">
            {data.map(option => (
              <li key={option.field} className="selector__list--item"
                onClick={() => handleOptionClick(option.field)}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
