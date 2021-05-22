import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect, HashRouter} from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import New from './Pages/InitialPage';
import Contactus from './Pages/Contactus';
import {useSelector} from 'react-redux'
// import { ProtectedRoute } from './components/Protected_route';
// import New from './After_login/New'

// import Form from './Register/Form';
const App = () => {
const user= useSelector(state => state.user.user)
console.log(user)
  return (
    <div>

      <Router>
        {!user ? <Switch>
          <Route path='/'exact component={New}/>

          <Route path='/Register'exact component={Register} />
         <Route path="/contactus" exact component={Contactus}/>
         <Route path='/login'exact component={Login}/>
         
         <Route path="*" component={()=>"404 not found"}/>    

        </Switch>: 
        user.role==="user"?   
        <Switch>
       
       <Route path='/navbar' component={Navbar}/>
         <Redirect to='/navbar/home'/>

       

                </Switch>
                :
                <Switch>
<Route path='/navbar' component={Navbar}/>

<Redirect to='/navbar/addcourse'/>
                </Switch>
                
         }
        

      </Router>
    </div>
  )
}

export default App