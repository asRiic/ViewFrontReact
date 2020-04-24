import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import _CreateNotes from './Components/CreateNotes'
import _CreateUser from './Components/CreateUserr'
import _NoteList from './Components/NoteList'
import _Ncomp from './Components/PlantillaHome'
import _Index from './Pages/Index'
import _Home from './Pages/Home'

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={_Index} />
        <Route path="/uAdd" component={_CreateUser} />
        <Route path="/nAdd" component={_CreateNotes} />
        <Route path="/nEdit/:id" component={_CreateNotes} />
        <Route path="/home/:id" component={_Home} />
        <Route path="/ncomp" component={_Ncomp} />
        <Route path="/nList" component={_NoteList} />
      </div>
    </Router>

  );
  
}

export default App;
