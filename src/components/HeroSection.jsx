import React from "react";
import "../css/heroSection.css"; // Import CSS file for hero section styling

function HeroSection() {
  return (
    <div className="hero-section">
      <img
        src="/assets/hero-image.jpg"
        alt="Hero Image"
        className="hero-image"
      />
      <div className="hero-text">
        <h1>Добре дошли!</h1>
        <p>
          Това е приложение което използва данни в реално време, за да Ви
          достави важна информация през летните сезони. Всички знаем колко важна
          е защитата срещу вредните UV лъчи особено през топлите месеци. Моля
          използвайте Замерването в този сайт за да откриете какъв е UV индекса
          в реално време, на избрана от вас локация. Нслаждавайте се на топлите
          дни с удоволствие и мерки!
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
