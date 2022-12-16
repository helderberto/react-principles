import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import type { Character } from '../types';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

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

  const memoizedCharacters = useMemo(() => characters, [characters]);

  return { characters: memoizedCharacters };
};
