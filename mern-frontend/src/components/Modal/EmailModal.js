import React, { useState } from "react";
import "./emailModal.scss"; // Fichier CSS pour les styles

const EmailModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [attachments, setAttachments] = useState([]); // Stocke les fichiers sélectionnés

    const toggleModal = () => setIsOpen(!isOpen);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setAttachments([...attachments, ...files]); // Ajoute les fichiers sélectionnés
    };

    return (
        <div className="email-container">
            {/* Bouton pour ouvrir la modal */}
            <button className="new-message-btn" onClick={toggleModal}>
                Nouveau message
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-header">
                            <h2>Nouveau message</h2>
                            <button className="close-btn" onClick={toggleModal}>X</button>
                        </div>

                        {/* Formulaire */}
                        <form className="email-form">
                            <input type="email" placeholder="To" required />
                            <input type="text" placeholder="Subject" />
                            <input type="email" placeholder="From" />
                            <textarea placeholder="Write your message..." rows="6" />

                            {/* Barre d'outils */}
                            <div className="toolbar">
                                {/* Input caché pour importer les fichiers */}
                                <input
                                    id="file-input"
                                    type="file"
                                    multiple
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                />
                                <label htmlFor="file-input" className="toolbar-btn">
                                    📎 {/* Icône pour pièce jointe */}
                                </label>

                                {/* Input caché pour importer des images */}
                                <input
                                    id="image-input"
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                />
                                <label htmlFor="image-input" className="toolbar-btn">
                                    🖼️ {/* Icône pour image */}
                                </label>

                                <button type="button" className="toolbar-btn">
                                    🔗 {/* Icône pour lien */}
                                </button>
                            </div>

                            {/* Liste des fichiers importés */}
                            {attachments.length > 0 && (
                                <div className="attachments">
                                    <h4>Fichiers attachés :</h4>
                                    <ul>
                                        {attachments.map((file, index) => (
                                            <li key={index}>{file.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Boutons */}
                            <div className="modal-footer">
                                <button type="button" className="cancel-btn" onClick={toggleModal}>
                                    Annuler
                                </button>
                                <button type="submit" className="send-btn">
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmailModal;
