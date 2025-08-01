import React, { useEffect, useState } from 'react';
import ApiService from '../components/services/apiService';
import ProductsSlider from '../components/sliders/productsSlider/productsSlider';
import Search from '../components/search/search';

import mainBg from '../assets/main-center-bg.png';
import mainLeftBg from '../assets/main-left-bg.svg';
import mainRightBg from '../assets/main-right-bg.svg';

import './mainPage.css';

function MainPage() {
  const [lastProducts, setLastProducts] = useState([]);
  const [lastServices, setLastServices] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [topServices, setTopServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    Promise.all([
      ApiService.getProductsByCategory('products'),
      ApiService.getProductsByCategory('services'),
    ])
      .then(([products, services]) => {
        const lastProducts = [...products]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 10);
        const lastServices = [...services]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 10);
        const topProducts = [...products]
          .sort((a, b) => b.rating - a.rating)
          .sort((a, b) => b.ratingCount - a.ratingCount)
          .slice(0, 10);
        const topServices = [...services]
          .sort((a, b) => b.rating - a.rating)
          .sort((a, b) => b.ratingCount - a.ratingCount)
          .slice(0, 10);

        setLastProducts(lastProducts);
        setLastServices(lastServices);
        setTopProducts(topProducts);
        setTopServices(topServices);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Завантаження...</p>;

  return (
    <div className="main-page">
      <div className="main-screen container">
        <div className="main-screen-col left">
          <h1>Знайди своє серед своїх!</h1>
          <h2>Інформаційна платформа-каталог для українців за кордоном.</h2>
          <Search />
        </div>
        <div className="main-screen-col right">
          <img
            src={mainBg}
            className="main-screen-bg"
            alt="main screen background"
          />
        </div>
        <img
          className="main-screen-left-bg"
          src={mainLeftBg}
          alt="main screen background"
        />
        <img
          className="main-screen-right-bg"
          src={mainRightBg}
          alt="main screen background"
        />
      </div>

      <div className="last-products container">
        <ProductsSlider
          products={lastProducts}
          categoryName="products"
          title="Останні додані товари"
        />
      </div>

      <div className="top-products container">
        <ProductsSlider
          products={topProducts}
          categoryName="products"
          title="Найпопулярніші товари"
        />
      </div>

      <div className="last-services container">
        <ProductsSlider
          products={lastServices}
          categoryName="services"
          title="Останні додані послуги"
        />
      </div>

      <div className="top-services container">
        <ProductsSlider
          products={topServices}
          categoryName="services"
          title="Найпопулярніші послуги"
        />
      </div>
    </div>
  );
}

export default MainPage;
