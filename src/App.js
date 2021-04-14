import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Contactus from './Pages/Contactus';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import home from './Pages/home';
import { ProtectedRoute } from './components/Protected_route';
import Nav from'./After_login/Nav';
import Skills from './After_login/Skills';
import AddPost from './After_login/AddPost';
import homee from './After_login/homee';
const App = () => {

  return (
    <div>

      <Router>
        <Switch>
          <Route path='/' exact component={Navbar}/>
          <Route path='/Register' component={Register} />
          <Route path='/login' component={Login}/>
          <Route path='/contactus' component={Contactus}/>
          <Route path='/home' component={home}/>
          <ProtectedRoute path='/navbar' component={Nav}/>
          <Route path='/homee' component={homee}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/addpost' component={AddPost}/>
          <Route path="*" component={()=>"404 not found"}/>

        </Switch>

      </Router>
    </div>
  )
}

export default App

