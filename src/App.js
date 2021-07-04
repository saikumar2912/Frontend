import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Contactus from './Pages/Contactus';
import {useSelector} from 'react-redux'
import LoginOtp from './Pages/LoginOtp';
// import { ProtectedRoute } from './components/Protected_route';
// import New from './After_login/New'

// import Form from './Register/Form';
const App = () => {
const user= useSelector(state => state.user.user)
console.log(user)
const state = useSelector(state => state)
console.log(state)
  return (
    <div>

      <Router>
        {!user ? <Switch>
          <Route path='/'exact component={Login}/>
          <Route path='/Register'exact component={Register} />
         <Route path="/contactus" exact component={Contactus}/>
         <Route path='/loginotp'exact component={LoginOtp}/>

         
         <Route path="*" component={()=>"404 not found"}/>    

        </Switch>: 
        user.role==="user"?   
        <Switch>
       
       <Navbar/>
          </Switch>
                :
                <Switch>
<Navbar/>

                </Switch>}
       </Router>
    </div>
  )
}

export default App