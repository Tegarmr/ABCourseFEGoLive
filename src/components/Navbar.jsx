import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './assets/sidebarMateri.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert(`Kamu mencari: ${searchTerm}`);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">Home</Link>
      </div>
      <div className="navbar-right">
        <input
          type="text"
          placeholder="Cari materi..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
