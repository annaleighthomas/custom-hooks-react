import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../state/characters';


const CharacterDetail = () => {
  const { id } = useParams();
  const [character, loading] = useCharacter(id);
  if (loading)
    return <h1>loading...</h1>;

  return (
    <>
      {character &&
        <div>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>{character.species}</p>
          <p>{character.status}</p>
        </div>}
    </>
  );
};

export default CharacterDetail;
