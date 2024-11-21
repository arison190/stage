import React from "react";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import { Outlet } from "react-router-dom"; // Importez Outlet
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* Outlet pour rendre les composants enfants comme Revenue */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
