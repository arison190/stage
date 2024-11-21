import React from "react";
import { Link } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import "./sidebar.scss";

const menuItems = {
  fournisseur: [
    {
      icon: CompareArrowsIcon,
      label: "Transfert",
      path: "/dashboard/transfert"
    },
    { icon: ChatIcon, label: "Chat", path: "/dashboard/chatF" },
    { icon: EmailIcon, label: "Gmail", path: "/dashboard/Gmail" }
  ],
  finance: [
    { icon: HomeIcon, label: "Home", path: "/dashboard/home" }, // Changer pour "/dashboard/home"
    { icon: TrendingUpIcon, label: "Revenue", path: "/dashboard/revenue" },
    { icon: TrendingDownIcon, label: "Depense", path: "/dashboard/depense" },
    {
      icon: BarChartIcon,
      label: "Statistique",
      path: "/dashboard/statistique"
    },
    { icon: EmailIcon, label: "Email", path: "/dashboard/Email" },
    { icon: DescriptionIcon, label: "LettreD", path: "/dashboard/lettreD" },
    { icon: ChatIcon, label: "Chat", path: "/dashboard/chatA" },
    {
      icon: SettingsOutlinedIcon,
      label: "Paramètre",
      path: "/dashboard/parametre"
    }
  ],
  administratif: [
    {
      icon: ManageAccountsOutlinedIcon,
      label: "Profile",
      path: "/dashboard/profile"
    },
    {
      icon: CalendarMonthOutlinedIcon,
      label: "Ajout Revenue",
      path: "/dashboard/ajout-revenue"
    },
    {
      icon: DiamondOutlinedIcon,
      label: "Chat Admin",
      path: "/dashboard/chat-admin"
    },
    { icon: ExitToAppOutlinedIcon, label: "Logout", path: "/logout" }
  ]
};

const MenuItem = ({ Icon, label, path }) => (
  <li>
    <Link to={path} className="menu-link">
      <Icon className="icon" />
      <span>{label}</span>
    </Link>
  </li>
);

const MenuSection = ({ title, items }) => (
  <>
    <p className="title">{title.toUpperCase()}</p>
    {items.map((item, index) => (
      <MenuItem
        key={`${title}-${index}`}
        Icon={item.icon}
        label={item.label}
        path={item.path}
      />
    ))}
  </>
);

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Finance</span>
        </Link>
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <MenuSection title="Fournisseur" items={menuItems.fournisseur} />
          <MenuSection title="Finance" items={menuItems.finance} />
          <MenuSection title="Administratif" items={menuItems.administratif} />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
