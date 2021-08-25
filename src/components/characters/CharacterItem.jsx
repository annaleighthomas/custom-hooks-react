import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, image, id }) => {
  return (
    <figure>
      <Link to={`/character-detail/${id}`}>
        <img src={image} alt={name} /></Link>
      <figcaption>
        <p>{name}</p>
      </figcaption>
    </figure>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default CharacterItem;
