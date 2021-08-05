import React from 'React';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../state/characters';

const CharacterList = () => {
  const [characters, loading] = useCharacters();

  const characterItems = characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterItem {...character} />
      </li>
    );
  });

  if (loading) return <h1>loading...</h1>;
  return <ul>{characterItems}</ul>;
};

export default CharacterList;
