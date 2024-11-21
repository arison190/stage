import React, { useState } from "react";
import emailService from "../../services/emailService"; // Assurez-vous que le chemin d'importation est correct
import { HiInbox, HiPaperAirplane } from "react-icons/hi";

const Email = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const emailData = { to, subject, content };
      const response = await emailService.sendEmail(emailData); // Assurez-vous que cette méthode existe
      setMessage(response.message);
      // Réinitialiser le formulaire
      setTo("");
      setSubject("");
      setContent("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCancel = () => {
    setTo("");
    setSubject("");
    setContent("");
    setMessage("");
    setError("");
  };

  const handleInboxClick = () => {
    // Logique pour naviguer vers la boîte de réception
    console.log("Navigating to Inbox");
  };

  const handleSendClick = () => {
    // Logique pour naviguer vers les e-mails envoyés
    console.log("Navigating to Sent Items");
  };

  return (
    <div>
      {/* Sidebar Horizontale */}
      <div className="flex justify-between bg-gray-200 p-4">
        <div
          className="flex items-center cursor-pointer"
          onClick={handleInboxClick}
        >
          <HiInbox className="mr-2" />
          <span>Boîte de Réception</span>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={handleSendClick}
        >
          <HiPaperAirplane className="mr-2" />
          <span>Envoyé</span>
        </div>
      </div>

      {/* Formulaire d'Email */}
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-4">
        <h2 className="text-2xl font-bold mb-4">Envoyer un Email</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              À :
            </label>
            <input
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Sujet :
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Contenu :
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              rows="4"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Envoyer
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="ml-2 w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
            >
              Annuler
            </button>
          </div>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}

        {error && <p className="mt-4 text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default Email;