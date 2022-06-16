import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Role from './components/Role';
import Customer from './components/Customer';
import AddCustomer from './components/Customer/AddCustomer';
import Contact from './components/Contact';
import Contract from './components/Contract';
import LoginPage from './components/LoginPage';
import Dashboard from './components/DashboardPage';
import { authenticate } from './store/session';
import 'bootstrap/dist/css/bootstrap.min.css';
import ManageCustomers from './components/ManageCustomersPage';
import SideNav from './components/SideNav/index.js';
import ManageContacts from './components/ManageContactsPage';



function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      {/* <SideNav/> */}
      <Switch>
        <Route path='/login' exact={true}>
          <LoginPage />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/customers' exact={true} >
          <ManageCustomers />
        </ProtectedRoute>
        <ProtectedRoute path='/contacts' exact={true} >
          <ManageContacts/>
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <Dashboard/>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
