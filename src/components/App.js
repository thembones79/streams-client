import React from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';

const PageOne = () => {
    return <div>PageOne <Link to="/pagetwo">P2</Link></div>
}

const PageTwo = () => {
    return <div>PageTwo <Link to="/">P1</Link></div>
}

const App = () => {
  return (
  <div>
      <BrowserRouter>
      <Route path="/" exact component={PageOne}/>
      <Route path="/pagetwo" component={PageTwo}/>
      </BrowserRouter>
      
      </div>)
      ;
};

export default App;
