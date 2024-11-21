import React, { useState } from "react";
import "./lettreD.scss";

const LettreD = () => {
  const [expediteur, setExpediteur] = useState("Votre Nom");
  const [destinataire, setDestinataire] = useState("Nom du Destinataire");
  const [montant, setMontant] = useState("");
  const [raison, setRaison] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="lettre-container">
      <div className="lettre-grid">
        <div className="lettre-form">
          <h2>Formulaire de Demande</h2>
          <div className="form-group">
            <label htmlFor="expediteur">Expéditeur</label>
            <input
              id="expediteur"
              value={expediteur}
              onChange={(e) => setExpediteur(e.target.value)}
              placeholder="Votre nom"
            />
          </div>
          <div className="form-group">
            <label htmlFor="destinataire">Destinataire</label>
            <input
              id="destinataire"
              value={destinataire}
              onChange={(e) => setDestinataire(e.target.value)}
              placeholder="Nom du destinataire"
            />
          </div>
          <div className="form-group">
            <label htmlFor="montant">Montant</label>
            <input
              id="montant"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              placeholder="Montant demandé"
              type="number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="raison">Raison</label>
            <textarea
              id="raison"
              value={raison}
              onChange={(e) => setRaison(e.target.value)}
              placeholder="Raison de la demande"
              rows={4}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
          <button onClick={handlePrint} className="print-button">
            Imprimer la Lettre
          </button>
        </div>

        <div className="lettre-preview">
          <h2>Aperçu de la Lettre</h2>
          <div className="lettre-content">
            <div className="lettre-logos">
              <img
                src="/placeholder.svg?height=50&width=50"
                alt="Logo 1"
                className="logo"
              />
              <img
                src="/placeholder.svg?height=50&width=50"
                alt="Logo 2"
                className="logo"
              />
            </div>
            <p className="lettre-date">{date}</p>
            <p className="lettre-destinataire">{destinataire},</p>
            <p>
              J'espère que ce message vous trouve en bonne santé. Je vous écris
              aujourd'hui pour vous faire une demande importante.
            </p>
            <p>{raison}</p>
            <p>
              Pour cette raison, je souhaiterais vous demander un prêt de{" "}
              {montant} €. Je m'engage à rembourser cette somme dès que
              possible.
            </p>
            <p>
              Je vous remercie sincèrement pour votre considération et votre
              aide potentielle.
            </p>
            <p className="lettre-signature">Cordialement,</p>
            <p>{expediteur}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LettreD;
