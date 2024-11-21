// src/pages/Revenue/Revenue.jsx
import React from "react";
import Card from "../../components/ui/Card.jsx"; // Chemin vers Card.jsx

const Revenue = () => {
  return (
    <div className="revenue-page">
      <h2> L'argentRevenue </h2>
      <div className="cards-container">
        <Card
          title="Revenue Client"
          content="Date
           
           Heurs:
           jours:
           motant:Ar"
          
          footer="Voir plus"
        />
        <Card
          title="Revenue Fournisseur"
          content="Date:
          Heurs:
          Jours:
           Motant:Ar
           ."
          footer ="Voir plus"
        />
        <Card
          title="Revenue Intermédiaire"
          content="Date:
          Heurs:
          Jours:
          Montnants:
          ."
          intermediateRevenue="5000 €"
          footer="Voir détails"
        />
      </div>
    </div>
  );
};

export default Revenue;
