import React, { useEffect, useState } from 'react';
import { getAllTrains } from './api';

const TrainListPage = ({ accessToken }) => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const data = await getAllTrains(accessToken);
        setTrains(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchTrains();
  }, [accessToken]);

  return (
    <div>
      <h1>All Trains</h1>
      {trains.map((train) => (
        <div key={train.trainNumber}>
          <h3>{train.trainName}</h3>
          <p>Train Number: {train.trainNumber}</p>
          {/* Display other train details */}
        </div>
      ))}
    </div>
  );
};

export default TrainListPage;