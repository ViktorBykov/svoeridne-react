import React from "react";
import { useNavigate } from "react-router-dom";
import "./detailsButton.css";

function DetailsButton({to}) {
    const navigate = useNavigate();

    return (
        <button onClick={()=>navigate(to)} className="details-button">
            <span>Деталі</span>
            <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4H16M16 4L13.1613 7M16 4L13.1613 1" stroke="white"/>
            </svg>
        </button>
    );
}

export default DetailsButton;