import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./app.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer"; 

import MainPage from "../pages/mainPage";
import CatalogPage from "../pages/catalogPage";
import ProductPage from "../pages/productPage/productPage";
import EventsPage from "../pages/events";
import MeetingsPage from "../pages/meetings";
import ForumPage from "../pages/forum";
import AboutPage from "../pages/about";
import SearchResultPage from "../pages/searchResultPage";

const App = () => {
  return (
    <Router>
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/events" element={<EventsPage />} />
          <Route path="/meetings" element={<MeetingsPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/search-results" element={<SearchResultPage />} />

          <Route path="/:categoryName/:subcategoryName/:productSlug" element={<ProductPage />} />
          <Route path="/:categoryName/:productSlug" element={<ProductPage />} />
          <Route path="/:categoryName/:subcategoryName" element={<CatalogPage />} />
          <Route path="/:categoryName" element={<CatalogPage />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;