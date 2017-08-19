import React from 'react';
import '../css/App.css'

const PageB = ({  history }) => {
  
    return(
      <div>
        <h2>Route B</h2>
        <div>
          <button className="btn btn-default" onClick={() => history.push('/pageA')}>Goto A</button>
          <button className="btn btn-default" onClick={() => history.push('/pageC')}>Goto C</button>
        </div>
      </div>
    );
  }

export default PageB;