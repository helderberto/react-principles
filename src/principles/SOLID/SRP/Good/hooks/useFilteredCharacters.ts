import { useMemo } from 'react';
import type { Character } from '../types';

export const useFilteredCharacters = (
  characters: Character[],
  species: string
) => {
  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => character.species === species);
  }, [characters, species]);

  return { filteredCharacters };
};
