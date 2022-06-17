import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import LoginPage from './components/LoginPage';
import Dashboard from './components/DashboardPage';
import { authenticate } from './store/session';
import 'bootstrap/dist/css/bootstrap.min.css';
import ManageCustomers from './components/ManageCustomersPage';
import ManageEmployees from './components/ManageEmployeesPage';
import SideNav from './components/SideNav/index.js';
import ManageContacts from './components/ManageContactsPage';
import ManageContracts from './components/ManageContractsPage';



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
 
      <Switch>
        <Route path='/login' exact={true}>
          <LoginPage />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/customers' exact={true} >
          <NavBar />
          <SideNav />
          <ManageCustomers />
        </ProtectedRoute>
        <ProtectedRoute path='/contacts' exact={true} >
          <NavBar />
          <SideNav />
          <ManageContacts/>
        </ProtectedRoute>
        <ProtectedRoute path='/contracts' exact={true} >
          <NavBar />
          <SideNav />
          <ManageContracts />
        </ProtectedRoute>
        <ProtectedRoute path='/employees' exact={true} >
          <NavBar />
          <SideNav />
          <ManageEmployees />
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <NavBar />
          <SideNav />
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <NavBar />
          <SideNav />
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <NavBar />
          <SideNav />
          <Dashboard/>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
