import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./app.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer"; 

import MainPage from "../pages/mainPage";
import CatalogPage from "../pages/catalogPage";
import CatalogItemPage from "../pages/catalogItemPage";
import EventsPage from "../pages/events";
import MeetingsPage from "../pages/meetings";
import ForumPage from "../pages/forum";
import AboutPage from "../pages/about";

const App = () => {
  return (
    <Router>
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/:categoryName" element={<CatalogPage />} />
          <Route path="/:categoryName/:subcategoryName" element={<CatalogPage />} />
          <Route path="/:categoryName/:subcategoryName/:productSlug" element={<CatalogItemPage />} />


          {/* <Route path="/:type/:subcategory/:id" element={<CatalogItemPage />} /> */}

          {/* <Route path="/services/" element={<CatalogPage type="services"/>} />
          <Route path="/services/:subcategory" element={<CatalogPage type="services"/>} />
          <Route path="/services/:subcategory/:id" element={<CatalogItemPage type="services"/>} /> */}
          
          <Route path="/events/" element={<EventsPage />} />
          <Route path="/meetings/" element={<MeetingsPage />} />
          <Route path="/forum/" element={<ForumPage />} />
          <Route path="/about/" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;