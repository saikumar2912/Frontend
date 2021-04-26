import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import New from './Pages/InitialPage';
import Contactus from './Pages/Contactus';
// import { ProtectedRoute } from './components/Protected_route';
// import New from './After_login/New'

// import Form from './Register/Form';
const App = () => {

  return (
    <div>

      <Router>
        <Switch>
        <Route path='/'exact component={New}/>


          <Route path='/Register'exact component={Register} />
          <Route path="/contactus" exact component={Contactus}/>
          <Route path='/login'exact component={Login}/>
           <Route path='/navbar' component={Navbar}/>
          <Route path="*" component={()=>"404 not found"}/>
          
        </Switch>

      </Router>
    </div>
  )
}

export default App

