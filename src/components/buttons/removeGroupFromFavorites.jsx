import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../../store/favoritesSlice';

import './button.css';

export default function RemoveGroupFromFavorites(props) {
  const dispatch = useDispatch();
  const { elements, string } = props;

  return (
    <button
      type="button"
      className="clear-button button"
      onClick={() => {
        elements.forEach((item) => {
          dispatch(removeFavorite(item.id));
        });
      }}
    >
      {string}
    </button>
  );
}
