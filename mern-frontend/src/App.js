import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import LettreD from "./pages/LettreD/LettreD";
import Revenue from "./pages/Revenue/Revenue";
import Parametre from "./pages/Parametre/Parametre";
import Transfert from "./pages/Transfert/Transfert";
import Login from "./pages/Login/Login.jsx";
import Depense from "./pages/Depense/Depense";
import Statistique from "./pages/Statistique/Statistique";
import ChatA from "./pages/ChatA/ChatA";
import Profile from "./pages/Profile/Profile";
import AjoutRevenue from "./pages/AjoutRevenue/AjoutRevenue";
import Email from "./pages/Email/Email";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page de connexion */}
        <Route path="/" element={<Login />} />

        {/* Routes imbriquées dans /dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="transfert" element={<Transfert />} />
          <Route path="chatF" element={<Chat />} />
          <Route path="lettreD" element={<LettreD />} />
          <Route path="revenue" element={<Revenue />} />
          <Route path="parametre" element={<Parametre />} />
          <Route path="depense" element={<Depense />} />
          <Route path="statistique" element={<Statistique />} />
          <Route path="chatA" element={<ChatA />} />
          <Route path="email" element={<Email />} />
          <Route path="profile" element={<Profile />} />
          <Route path="ajout-revenue" element={<AjoutRevenue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
