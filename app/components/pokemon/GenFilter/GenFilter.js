import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import styles from './styles.module.css';

function GenFilter({ pokemons, filteredGen, resetSearchBar }) {
  const [activeGens, setActiveGens] = useState([]);
  const [resetSearch, setResetSearch] = useState('');
  const [genNum, setGenNum] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeTypes, setActiveTypes] = useState([]);
  const [typeOpen, setTypeOpen] = useState(false);

  const genButtonStyles = `bg-transparent p-2 m-1 border-none font-light text-white rounded-lg cursor-pointer tracking-wider`;

  const handleGenFilter = event => {
    const genValue = event.target.value;

    if (activeGens.includes(genValue)) {
      const newGenArray = activeGens.filter(gen => {
        return gen !== genValue;
      });
      setActiveGens(newGenArray);
    } else {
      setActiveGens([...activeGens, genValue]);
    }
    resetSearchBar();
  };

  /*   const handleTypeFilter = event => {
    const newTypeArray = 

  }; */

  useEffect(() => {
    if (activeGens.length === 0) {
      filteredGen(pokemons);
      genCounter();
    } else {
      const genFilteredList = pokemons.filter(pokemon => {
        return activeGens.includes(pokemon.generation);
      });
      genCounter();
      filteredGen(genFilteredList);
    }
  }, [activeGens]);

  const genNumbers = {
    'generation-i': 1,
    'generation-ii': 2,
    'generation-iii': 3,
    'generation-iv': 4,
    'generation-v': 5,
    'generation-vi': 6,
    'generation-vii': 7,
    'generation-viii': 8,
    'generation-ix': 9,
    'generation-x': 10,
  };

  function convertStrings(activeGens, map) {
    const outputArray = activeGens.map(input => (
      <span
        key={map[input]}
        className="inline-block text-base mr-2 bg-[#797979] w-7 h-7 rounded-3xl text-center"
      >
        {map[input]}
      </span>
    ));
    return outputArray;
  }

  const outputArray = convertStrings(activeGens, genNumbers);

  const genCounter = () => {
    setGenNum(outputArray);
  };

  const activeGenClass = gen => {
    return activeGens.includes(gen) ? styles.active : '';
  };

  return (
    <div className={`relative flex flex-column`}>
      <div className="relative flex items-center">
        <button
          className={`bg-transparent border-none text-md text-white tracking-wider cursor-pointer font-normal mr-2`}
          onClick={() => setIsOpen(prev => !prev)}
        >
          Generations
          {!isOpen ? (
            <KeyboardDoubleArrowUpIcon sx={{ fontSize: 18 }} />
          ) : (
            <KeyboardDoubleArrowDownIcon sx={{ fontSize: 18 }} />
          )}
        </button>
        {outputArray.length > 2 ? (
          <>
            {outputArray.slice(0, 2)}{' '}
            <span className="inline-block text-xs">
              +{outputArray.length - 2} more
            </span>
          </>
        ) : (
          outputArray
        )}
      </div>
      {isOpen && (
        <div
          className={`${styles.genNav} absolute top-14 flex flex-col items-start p-5 z-10 w-[300px] rounded-3xl text-sm`}
        >
          <div className="flex flex-row items-center justify-between w-full pb-4">
            <div>
              <span className="text-lg text-white">Generations</span>
            </div>
            <div>
              <button
                className={`${genButtonStyles}`}
                onClick={() => setActiveGens([])}
              >
                Clear All
              </button>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <button
                value="generation-i"
                className={`${activeGenClass(
                  'generation-i'
                )} ${genButtonStyles}`}
                onClick={handleGenFilter}
              >
                Generation 1
              </button>

              <button
                value="generation-ii"
                className={`${activeGenClass(
                  'generation-ii'
                )} ${genButtonStyles}`}
                onClick={handleGenFilter}
              >
                Generation 2
              </button>
              <button
                value="generation-iii"
                className={`${activeGenClass(
                  'generation-iii'
                )} ${genButtonStyles}`}
                onClick={handleGenFilter}
              >
                Generation 3
              </button>
              <button
                value="generation-iv"
                className={`${activeGenClass(
                  'generation-iv'
                )} ${genButtonStyles}`}
                onClick={handleGenFilter}
              >
                Generation 4
              </button>
              <button
                value="generation-v"
                className={`${activeGenClass(
                  'generation-v'
                )} ${genButtonStyles}`}
                onClick={handleGenFilter}
              >
                Generation 5
              </button>
            </div>
            <div className="flex flex-col">
              <button
                value="generation-vi"
                className={`${activeGenClass(
                  'generation-vi'
                )} ${genButtonStyles}`}
                onClick={handleGenFilter}
              >
                Generation 6
              </button>

              <button
                value="generation-vii"
                className={`${activeGenClass(
                  'generation-vii'
                )} ${genButtonStyles}`}
                onClick={handleGenFilter}
              >
                Generation 7
              </button>
              <button
                value="generation-viii"
                className={`${activeGenClass(
                  'generation-viii'
                )} ${genButtonStyles}`}
                onClick={handleGenFilter}
              >
                Generation 8
              </button>
              <button
                value="generation-ix"
                className={`${activeGenClass(
                  'generation-ix'
                )} ${genButtonStyles}`}
                onClick={handleGenFilter}
              >
                Generation 9
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="relative flex items-center">
        <button
          className={`bg-transparent border-none text-md text-white tracking-wider cursor-pointer font-normal`}
          onClick={() => setTypeOpen(prev => !prev)}
        >
          Types
          {!typeOpen ? (
            <KeyboardDoubleArrowUpIcon sx={{ fontSize: 18 }} />
          ) : (
            <KeyboardDoubleArrowDownIcon sx={{ fontSize: 18 }} />
          )}
        </button>
        {outputArray.length > 2 ? (
          <>
            {outputArray.slice(0, 2)}{' '}
            <span className="inline-block text-xs">
              +{outputArray.length - 2} more
            </span>
          </>
        ) : (
          outputArray
        )}
      </div>
    </div>
  );
}

export default GenFilter;
