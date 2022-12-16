import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

export const Bad = () => {
  const [characters, setCharacters] = useState<any>([]);

  const fetchCharacters = async () => {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character'
    );
    if (response && response.data) {
      setCharacters(response.data.results);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const filteredHumans = useMemo(
    () => characters.filter((character: any) => character.species === 'Human'),
    [characters]
  );

  return (
    <div className="container">
      <h1>Characters by Species</h1>

      <h2>All</h2>
      <div className="row">
        {characters.map((character: any) => (
          <div className="col" key={character.id}>
            <h3>{character.name}</h3>
            <p>Species: {character.species}</p>

            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>

      <h2>Humans</h2>
      <div className="row">
        {filteredHumans.map((character: any) => (
          <div className="col" key={character.id}>
            <h3>{character.name}</h3>
            <p>Species: {character.species}</p>

            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
