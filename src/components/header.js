import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom'
import '../css/App.css';

const Header = () => {
  return (
    
    <div className="App ">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-md-12 col-md-offset-5">
            <ul className='nav nav-pills'>
              <li><Link to='/pageA'>PageA</Link></li>
              <li><Link to='/pageB'>PageB</Link></li>
              <li><Link to='/pageC'>PageC</Link></li>
            </ul>
          </div>

        </div>

      </div>
       
         
      </div>
    
  );
};

export default Header;