import React from 'react';
import Amplify from 'aws-amplify';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import awsconfig from './aws-exports';
import { Hub, Logger } from 'aws-amplify';

import { HandleSignIn } from './lib/SignIn';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">


    </div>
  );
}

const logger = new Logger('My-Logger');
const listener = (data) => {
    switch (data.payload.event) {
        case 'signIn':
            HandleSignIn()
            break;
    }
}

Hub.listen('auth', listener);


const signUpConfig = {

  header: 'Support++ CLOUD',
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'username', // !!!
      required: true,
      displayOrder: 1,
      type: 'email',
      custom: false
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
      custom: false
    }
  ]
};

export default withAuthenticator(App, { signUpConfig });
