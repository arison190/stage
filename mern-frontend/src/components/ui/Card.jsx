// src/components/ui/card.jsx
import React from "react";
import "./card.scss"; // Assure-toi que tu as un fichier card.scss pour les styles

const Card = ({ title, content, footer }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{content}</p>
      </div>
      {footer && (
        <div className="card-footer">
          <p>{footer}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
