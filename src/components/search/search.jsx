import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../services/apiService";

import "./search.css"

export default function Search() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotFound(false);

    const allProducts = await ApiService.getProductsByCategory("products");
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setLoading(false);

    if (filtered.length > 0) {
      navigate("/search-results", { state: { results: filtered, query } });
    } else {
      setNotFound(true);
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Пошук товарів та послуг..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="#52B3CB" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="40" height="40" rx="19.5" stroke="#ffffff"/>
            <path d="M12 20H28M28 20L25.1613 23M28 20L25.1613 17" stroke="#ffffff"/>
          </svg>
        </button>
      </form>
      {loading && <p>Пошук...</p>}
      {notFound && <p>Нічого не знайдено</p>}
    </div>
  );
}