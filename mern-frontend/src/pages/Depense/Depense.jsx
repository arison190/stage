import React, { useState, useEffect } from "react";
import {
  getAllDepenses,
  addDepense,
  updateDepense,
  deleteDepense
} from "../../services/depenseService";

const Depense = () => {
  const [depenses, setDepenses] = useState([]);
  const [formData, setFormData] = useState({
    nom: "",
    besoin: "",
    nombreDeBesoin: "",
    prixA1: "",
    prixBesoin: "",
    serviceBesoin: "",
    actions: "",
    date: ""
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchDepenses();
  }, []);

  const fetchDepenses = async () => {
    try {
      const response = await getAllDepenses();
      setDepenses(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des dépenses :", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateDepense(editId, formData);
      } else {
        await addDepense(formData);
      }
      fetchDepenses();
      resetForm();
    } catch (error) {
      console.error("Erreur lors de l'enregistrement de la dépense :", error);
    }
  };

  const handleEdit = (depense) => {
    setFormData(depense);
    setEditId(depense._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDepense(id);
      fetchDepenses();
    } catch (error) {
      console.error("Erreur lors de la suppression de la dépense :", error);
    }
  };

  const resetForm = () => {
    setFormData({
      nom: "",
      besoin: "",
      nombreDeBesoin: "",
      prixA1: "",
      prixBesoin: "",
      serviceBesoin: "",
      actions: "",
      date: ""
    });
    setEditId(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Gestion des Dépenses
      </h1>

      {/* Formulaire */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              name="nom"
              placeholder="Nom"
              onChange={handleChange}
              value={formData.nom}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Besoin
            </label>
            <input
              name="besoin"
              placeholder="Besoin"
              onChange={handleChange}
              value={formData.besoin}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Nombre de besoin
            </label>
            <input
              name="nombreDeBesoin"
              type="number"
              placeholder="Nombre de besoin"
              onChange={handleChange}
              value={formData.nombreDeBesoin}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Prix A1
            </label>
            <input
              name="prixA1"
              type="number"
              placeholder="Prix A1"
              onChange={handleChange}
              value={formData.prixA1}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Prix besoin
            </label>
            <input
              name="prixBesoin"
              type="number"
              placeholder="Prix besoin"
              onChange={handleChange}
              value={formData.prixBesoin}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Service besoin
            </label>
            <input
              name="serviceBesoin"
              placeholder="Service besoin"
              onChange={handleChange}
              value={formData.serviceBesoin}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Actions
            </label>
            <input
              name="actions"
              placeholder="Actions"
              onChange={handleChange}
              value={formData.actions}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              name="date"
              type="date"
              onChange={handleChange}
              value={formData.date}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              {editId ? "Mettre à jour" : "Ajouter"}
            </button>
          </div>
        </form>
      </div>

      {/* Liste des dépenses */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Liste des Dépenses
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Besoin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prix A1
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prix Besoin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  port 
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {depenses.map((depense) => (
                <tr key={depense._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {depense.nom}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {depense.besoin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {depense.nombreDeBesoin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {depense.prixA1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {depense.prixBesoin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {depense.serviceBesoin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {depense.actions}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {depense.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                    <button
                      onClick={() => handleEdit(depense)}
                      className="text-indigo-600 hover:text-indigo-900 font-medium"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(depense._id)}
                      className="text-red-600 hover:text-red-900 font-medium"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Depense;
