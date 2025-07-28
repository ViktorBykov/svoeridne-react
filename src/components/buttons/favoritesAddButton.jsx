import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addFavorite, removeFavorite } from "../../store/favoritesSlice";

import "./button.css";

function FavoritesAddButton({id}) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.includes(id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

    return (
        <button 
            onClick={handleClick}
            aria-pressed={isFavorite}
            className={"button favorites-button"}>

            <span>
                {isFavorite ? "Видалити з обраного" : "Додати в обране"}
            </span>
        </button>
    );
}

export default FavoritesAddButton;