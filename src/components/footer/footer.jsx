// components/Footer/Footer.jsx
import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletterSection">
        <div className="left">
          <h2>Не пропусти<br />важливе!</h2>
          <ul>
            <li>
              <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4H16M16 4L13.1613 7M16 4L13.1613 1" stroke="white"/>
              </svg>
              <span> Актуальні оголошення та спеціальні пропозиції</span>
            </li>
            <li>
              <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4H16M16 4L13.1613 7M16 4L13.1613 1" stroke="white"/>
              </svg>
              <span> Корисні поради та лайфхаки для українців за кордоном</span>
            </li>
            <li>
              <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4H16M16 4L13.1613 7M16 4L13.1613 1" stroke="white"/>
              </svg>
              <span> Ексклюзивні знижки від продавців та сервісів</span>
            </li>
          </ul>
        </div>

        <div className="right">
          <h3>Підписатись</h3>
          <form className="form">
            <input type="email" placeholder="E-mail" />
            <button type="submit">Підписатись</button>
          </form>
          <small>Жодного спаму – тільки важливе!</small>
        </div>
      </div>

      <div className="bottom">
        <div className="logoAndCopy">
          <img src={logo} alt="Svoje ridne logo" className="logo" />
          <span>© Svoje Ridne, 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
