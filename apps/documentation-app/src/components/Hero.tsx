import React from "react";
import "../css/Hero.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
      {/* Contenuto testuale */}
      <div className="hero-content">
        <h1 className="hero-title">Crea interfacce straordinarie con facilità</h1>
        <p className="hero-subtitle">
          Una libreria di componenti UI moderna, accessibile e altamente personalizzabile per i tuoi progetti React.
        </p>
        <div className="hero-buttons">
          <button className="hero-button"><Link to="/components"> 📕 Esplora la documentazione</Link></button>
          <button className="hero-button">🚀 Get started </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
