import React from "react";
import "./button.css";

function FavoritesAddButton({id}) {

    return (
        <button onClick={()=>console.log(id)} className="favorites-button">
            <span>Додати в обране</span>
        </button>
    );
}

export default FavoritesAddButton;