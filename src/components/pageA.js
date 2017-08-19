import React from 'react';
import '../css/App.css';


const PageA = ({  history }) => {
  
    return(
      <div>
        <h2>Route A</h2>
        <div>
          <button className="btn btn-default" onClick={() => history.push('/pageB')}>Goto B</button>
          <button className="btn btn-default" onClick={() => history.push('/pageC')}>Goto C</button>
        </div>
      </div>
    );
  }

export default PageA;