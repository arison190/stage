import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // N'oublie pas d'importer le CSS d'AOS

AOS.init(); // Initialisation de AOS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Mot de passe:", password);
  };

  return (
    <div className="login-container flex justify-center items-center min-h-screen bg-[#f0f2f5]">
      <div
        className="login-box bg-transparent  p-12 rounded-lg shadow-lg w-[40%]" // Taille augmentée de 30%
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Titre */}
        <h2
          className="text-center text-3xl font-bold mb-8" // Taille et marges augmentées
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Se connecter
        </h2>

        {/* Formulaire de connexion */}
        <form onSubmit={handleSubmit}>
          <div
            className="input-group mb-6"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="500"
          >
            <input
              type="email"
              className="input-field w-full p-4 text-lg border border-gray-300 rounded-md" // Champs plus grands
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div
            className="input-group mb-6"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="700"
          >
            <input
              type="password"
              className="input-field w-full p-4 text-lg border border-gray-300 rounded-md" // Champs plus grands
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-4 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="1000"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
