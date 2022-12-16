import type { CharacterProps } from './types';

export const CharacterItem = ({ character }: CharacterProps) => (
  <div className="col">
    <h3>{character.name}</h3>
    <p>Species: {character.species}</p>

    <img src={character.image} alt={character.name} />
  </div>
);
