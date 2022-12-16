export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}

export interface CharacterProps {
  character: Character;
}

export interface CharacterListProps {
  title: string;
  characters: Character[];
}
