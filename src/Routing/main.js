import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageA from '../components/pageA';
import PageB from '../components/pageB';
import PageC from '../components/pageC';


const Main = () => (
  <main>
  
        <Switch >
      <Route exact path='/pageA' component={PageA}/>
      <Route path='/pageB' component={PageB}/>   
       <Route path='/pageC' component={PageC}/>   
    </Switch>


  </main>
)
 


export default Main;