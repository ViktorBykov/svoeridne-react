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
            <li>✅ Актуальні оголошення та спеціальні пропозиції</li>
            <li>✅ Корисні поради та лайфхаки для українців за кордоном</li>
            <li>✅ Ексклюзивні знижки від продавців та сервісів</li>
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
