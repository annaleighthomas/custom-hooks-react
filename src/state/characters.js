import { useState, useEffect } from 'react';
import { fetchCharacters, fetchCharacter } from '../services/rickAndMortyApi';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters()
      .then(characters => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);

  return [characters, loading];
};

export const useCharacter = (id) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacter(id)
      .then((character) => { 
        setCharacter(character);
        setLoading(false);
      });
  }, [id]);

  return [character, loading];
};
