import React from 'react';
import { useRoutes } from 'hookrouter';

import NotFound from './NotFound';
import Cart from './Cart';
import Name from './Name';
import Address from './Address';

// State
//  - login or not
//  - individual form content

const routes = {
  '/': () => <Cart />,
  '/name': () => <Name />,
  '/address': () => <Address />,
  // '/personal': () => <Personal />,
  // '/sign_up': () => <SignUp />,
  // '/sign_in': () => <SignIn />,
  // '/pay': () => <Pay />,
  // '/confirm': () => <Confirm />,
  // '/complete': () => <Complete />,
};

const App = () => {

  const routeResult = useRoutes(routes);
  return routeResult || <NotFound />;
};

export default App;
