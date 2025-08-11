import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  const [inSort, setInSort] = React.useState(goodsFromServer);

  const organizeAlphabetical = (list: string[]): string[] => {
    return [...list].sort((a, b) => a.localeCompare(b));
  };

  const organizeByLength = (list: string[]): string[] => {
    return [...list].sort((a, b) => a.length - b.length);
  };

  const organizeReverse = (list: string[]): string[] => {
    return [...list].reverse();
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="button is-info is-light"
          onClick={() => setInSort(organizeAlphabetical(inSort))}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="button is-success is-light"
          onClick={() => setInSort(organizeByLength(inSort))}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="button is-warning is-light"
          onClick={() => setInSort(organizeReverse(inSort))}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-danger is-light"
          onClick={() => setInSort(goodsFromServer)}
        >
          Reset
        </button>
      </div>

      <ul>
        {inSort.map(iten => (
          <li key={iten} data-cy="Good">
            {iten}
          </li>
        ))}
      </ul>
    </div>
  );
};
