// src/pages/Transfert.jsx
import React, { useState, useEffect } from "react";
import { getTransferts, createTransfert } from "../../services/transfertService";
import "./transfert.scss";


const Transfert = () => {
  const [formData, setFormData] = useState({
    montant: "",
    expediteur: "",
    destinataire: "",
    categorie: "manuel"
  });

  const [transferts, setTransferts] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Effect to fetch transferts on component mount
  useEffect(() => {
    fetchTransferts();
  }, []);

  // Function to fetch transferts
  const fetchTransferts = async () => {
    try {
      const data = await getTransferts();
      setTransferts(data);
    } catch (err) {
      setError("Erreur lors de la récupération des transferts");
      console.error(err);
    }
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission to create a new transfert
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTransfert(formData);
      fetchTransferts(); // Fetch updated list of transferts
      setFormData({
        montant: "",
        expediteur: "",
        destinataire: "",
        categorie: "manuel"
      });
      setIsModalOpen(false); // Close the modal
      alert("Transfert créé avec succès");
    } catch (err) {
      setError("Erreur lors de la création du transfert");
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Gestion des Transferts</h2>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Nouveau Transfert
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Créer un Transfert</h3>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-1">Montant:</label>
                <input
                  type="number"
                  name="montant"
                  value={formData.montant}
                  onChange={handleChange}
                  required
                  className="border rounded w-full px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Expéditeur:</label>
                <input
                  type="text"
                  name="expediteur"
                  value={formData.expediteur}
                  onChange={handleChange}
                  required
                  className="border rounded w-full px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Destinataire:</label>
                <input
                  type="text"
                  name="destinataire"
                  value={formData.destinataire}
                  onChange={handleChange}
                  required
                  className="border rounded w-full px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Catégorie:</label>
                <select
                  name="categorie"
                  value={formData.categorie}
                  onChange={handleChange}
                  required
                  className="border rounded w-full px-3 py-2"
                >
                  <option value="manuel">Manuel</option>
                  <option value="intermediaire">Intermédiaire</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Créer Transfert
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <h2 className="text-xl font-bold mt-6">Historique des Transferts</h2>
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Montant</th>
            <th className="border px-4 py-2">Expéditeur</th>
            <th className="border px-4 py-2">Destinataire</th>
            <th className="border px-4 py-2">Catégorie</th>
          </tr>
        </thead>
        <tbody>
          {transferts.length > 0 ? (
            transferts.map((transfert) => (
              <tr key={transfert._id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{transfert.montant}</td>
                <td className="border px-4 py-2">{transfert.expediteur}</td>
                <td className="border px-4 py-2">{transfert.destinataire}</td>
                <td className="border px-4 py-2">{transfert.categorie}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="border px-4 py-2 text-center">
                Aucun transfert disponible
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Transfert;
