import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import FullPageSpinner from './components/full-page-spinner';
import { useAuth } from './context/auth';
import Home from './pages/Home';
import GuestRoute from './router/guest-route';
import Login from './pages/auth/Login';
import Admin from './pages/admin/Admin';
import AuthRoute from './router/auth-route';


function App () {
  let { initializing } = useAuth();
  return (
    initializing
      ? <FullPageSpinner />
      : <Router>
        
          <Switch>
            <GuestRoute exact path="/" component={Home} title="welcome" />
            <GuestRoute path="/login" component={Login} title="Login" />
            <AuthRoute path='/home' component={Admin} title="Admin" />
          </Switch>
      </Router>
  );
};

export default App;

// import './App.css';

// const App = () =>{
//   return (
//     <h1>
//       Hello World
//     </h1>
//   );
// }

// export default App;


