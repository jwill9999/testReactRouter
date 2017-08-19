import React from 'react';
import '../css/App.css'

const PageC = ({  history }) => {
  
    return(
      <div>
        <h2>Route C</h2>
        <div>
          <button className="btn btn-default" onClick={() => history.push('/pageA')}>Goto A</button>
          <button className="btn btn-default" onClick={() => history.push('/pageB')}>Goto B</button>
        </div>
      </div>
    );
  }

export default PageC;