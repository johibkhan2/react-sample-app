import React from 'react';
import { Link } from 'react-router';


// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app">
      <div>
      <header className="primary-header">
          <ul>
              <li><Link to="/actions" className="action">Actions</Link></li>
              <li><Link to="/" className="home">Home</Link></li>
          </ul>
      </header>
      </div>
        <br/>
        <br/>
        <br/>
     <main>
        {props.children}
      </main>
    </div>
    );
}
