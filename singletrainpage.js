import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTrain } from './api';

const SingleTrainPage = ({ accessToken }) => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchSingleTrain = async () => {
      try {
        const data = await getSingleTrain(trainNumber, accessToken);
        setTrain(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchSingleTrain();
  }, [trainNumber, accessToken]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Single Train</h1>
      <h3>{train.trainName}</h3>
      <p>Train Number: {train.trainNumber}</p>
      {/* Display other train details */}
    </div>
  );
};

export default SingleTrainPage;