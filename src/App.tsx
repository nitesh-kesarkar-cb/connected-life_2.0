

import { useEffect } from 'react';
import './App.css'
import SignIn from './auth/pages/sign-in/SignIn'
import React from 'react';
import SignUp from './auth/pages/sign-up/SignUp';

function App() {
  const [location, setLocation] = React.useState(window.location.pathname);

  useEffect(() => {

   console.log('App component mounted', location);
  }, []);
  
  return (
    <>

    {
     location === '/sign-up' ? <SignUp disableCustomTheme={false} /> : null
    }

    {
      location !== '/sign-up' ? <SignIn disableCustomTheme={false} /> : null
    }


    </>
  )
}

export default App
