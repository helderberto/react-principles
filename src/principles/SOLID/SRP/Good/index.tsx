import { CharacterList } from './CharacterList';
import { useFilteredCharacters } from './hooks/useFilteredCharacters';
import { useCharacters } from './hooks/useCharacters';

export const Good = () => {
  const { characters } = useCharacters();
  const { filteredCharacters } = useFilteredCharacters(characters, 'Human');

  return (
    <div className="container">
      <h1>Characters by Species</h1>

      <CharacterList title="All" characters={characters} />
      <CharacterList title="Humans" characters={filteredCharacters} />
    </div>
  );
};
