import React from 'react';
import { Link } from 'react-router-dom';

import './sideBar.css'; // Import your CSS file

const Header = ({ user, onLogout }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
        <Link to="/"><img className="logo"   src="census-logo.png" alt="Logo" /></Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/user-profile">User Profile</Link></li>
          <li><Link to="/data-collection">Data Collection</Link></li>      
          <li><Link to="/data-visualisation">Data Visualization</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

















// import React from 'react';
// import { Link } from 'react-router-dom';
// import './sideBar.css';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <img src="path_to_your_logo.png" alt="Your Logo" className="logo" />
//         <h2>Dashboard</h2>
//       </div>
//       <ul className="sidebar-menu">
//         <li>
//           <Link to="/dashboard" className="sidebar-link">
//             <i className="fas fa-tachometer-alt"></i> Dashboard Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/dashboard/profile" className="sidebar-link">
//             <i className="fas fa-user"></i> User Profile
//           </Link>
//         </li>
//         <li>
//           <Link to="/dashboard/data-collection" className="sidebar-link">
//             <i className="fas fa-pen-square"></i> Data Collection
//           </Link>
//         </li>
//         <li>
//           <Link to="/dashboard/data-visualization" className="sidebar-link">
//             <i className="fas fa-chart-bar"></i> Data Visualization
//           </Link>
//         </li>
//         <li>
//         <Link to="/logout" className="sidebar-link">
//           <i className="fas fa-sign-out-alt"></i> Logout
//         </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
