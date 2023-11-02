import React, { useState } from 'react';
import Table from './Table';

function Home() {
  // Define your state and functions here

  const fetchData1 = () => {
    // Make a GET request to the first route (placeholder URL)
    fetch('http://3.213.172.116:3000/buses')
      .then((response) => response.json())
      .then((data) => {
        // Handle the received data
        console.log(data); // You can add code to handle the data here
      })
      .catch((error) => {
        console.error('There was an error retrieving the table');
      });
  };

  const fetchData2 = () => {
    // Make a GET request to the second route (placeholder URL)
    fetch('http://ipaddress2:port2/route2')
      .then((response) => response.json())
      .then((data) => {
        // Handle the received data
        console.log(data); // You can add code to handle the data here
      })
      .catch((error) => {
        console.error('There was an error retrieving data from the second route');
      });
  };

  return (
    <div>
      <h1>CATA Home</h1>
      {/* Add buttons that call fetchData1 and fetchData2 */}
      <button onClick={fetchData1}>Fetch Data 1</button>
      <button onClick={fetchData2}>Fetch Data 2</button>
      <Table />
    </div>
  );
}

export default Home;
