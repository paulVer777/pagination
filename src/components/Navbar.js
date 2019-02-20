import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/" className='navbar__link navbar__link--home'>Home</Link>
      <Link to="/list/1" className='navbar__link' >List</Link>
      <Link to="/about" className='navbar__link'>About</Link>
    </div>
  );
}
