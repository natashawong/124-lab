import React from 'react';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import firebase from "firebase/compat";
import { useAuthState } from 'react-firebase-hooks/auth';

import './styles.css';

function App() {
  const auth = firebase.auth();
  const [user, loading, error] = useAuthState(auth);

  function UserStateController() {
    if (loading) {
      return <h1>Loading...</h1>
    } else if (user) {
      return <LoggedIn />;
    } else {
      return <LoggedOut />;
    }
  }

  return (
    <UserStateController />
  );
}

export default App;
