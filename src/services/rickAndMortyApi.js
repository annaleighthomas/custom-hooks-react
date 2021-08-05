const URL = 'https://rickandmortyapi.com/api/character';

const fetchCharacters = () => {

  return fetch(URL)
    .then(characters => characters.json())
    .then(({ results }) => results);
};

const fetchCharacter = (id) => {
  return fetch(`${URL}/${id}`)
    .then(character => character.json())
    .then((results) => results)
    .catch(err => console.error(err));
};


export { fetchCharacters, fetchCharacter };
