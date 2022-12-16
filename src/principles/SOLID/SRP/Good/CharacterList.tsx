import { CharacterItem } from './CharacterItem';
import type { Character, CharacterListProps } from './types';

export const CharacterList = ({ title, characters }: CharacterListProps) => (
  <>
    <h2>{title}</h2>
    <div className="row">
      {characters.map((character: Character) => (
        <CharacterItem character={character} key={character.id} />
      ))}
    </div>
  </>
);
