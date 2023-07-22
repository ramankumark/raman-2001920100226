import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TrainListPage from './TrainListPage';
import SingleTrainPage from './SingleTrainPage';
import { registerCompany, getAccessToken } from './api';

const App = () => {
  const [accessToken, setAccessToken] = useState('');

  // Implement the registration and authentication process to obtain the accessToken
  const handleRegisterCompany = async () => {
    try {
      const companyData = {
        companyName: 'Train Central',
        ownerName: 'Ram',
        rollNo: 'YourRollNumber', // Replace with your university/college roll number
        ownerEmail: 'ram@abc.edu',
        accessCode: 'FKDLjE', // Replace with the provided access code
      };

      const companyInfo = await registerCompany(companyData);
      console.log('Registered Company:', companyInfo);

      const authData = {
        companyName: companyInfo.companyName,
        clientID: companyInfo.clientID,
        ownerName: companyInfo.ownerName,
        ownerEmail: companyInfo.ownerEmail,
        rollNo: companyData.rollNo,
        clientSecret: companyInfo.clientSecret,
      };

      const tokenInfo = await getAccessToken(authData);
      console.log('Access Token:', tokenInfo);

      setAccessToken(tokenInfo.accessToken);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
          </ul>
        </nav>

        <button onClick={handleRegisterCompany}>Register Company</button>

        <Switch>
          <Route exact path="/">
            <TrainListPage accessToken={accessToken} />
          </Route>
          <Route path="/train/:trainNumber">
            {/* Use React Router to pass the trainNumber */}
            <SingleTrainPage accessToken={accessToken} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;