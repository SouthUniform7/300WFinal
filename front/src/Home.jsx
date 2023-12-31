import React, { useState } from 'react';

function Home() {
  const [busID, setBusID] = useState('');
  const [error, setError] = useState('');
  const [textout, setTextOut] = useState('');

  function fetchData1() {
    fetch('http://3.213.172.116:3000/buses')
      .then((response) => response.json())
      .then((data) => {
        // Handle the received data
        console.log(data);
        setTextOut(JSON.stringify(data));

      })
      .catch((error) => {
        console.error('There was an error retrieving the table');
      });
  }


  function fetchData2() {
    if (isNaN(busID)) {
      setError('Please enter a valid number');
      return;
    }
    
    fetch(`http://3.213.172.116:3000/bus?busID=${busID}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the received data
        console.log(data);
        setTextOut(JSON.stringify(data));
      })
      .catch((error) => {
        console.error('There was an error retrieving data from the second route');
      });
  }

  function fetchData3() {
    fetch('http://3.213.172.116:3000/weather')
      .then((response) => response.json())
      .then((data) => {
        // Handle the received data
        console.log(data);
        setTextOut(JSON.stringify(data));

      })
      .catch((error) => {
        console.error('There was an error retrieving the table');
      });
  }
  

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setBusID(inputValue);
    setError('');
  };

  return (
    <div>
      <h1>CATA Home</h1>
      <button onClick={fetchData1}>Fetch Data 1</button>
      <a href='http://3.213.172.116:3000/buses'> One that acts as an API, displaying this same data, but in a web data format RAW</a>
      <h2>Fetch Data 2</h2>
      <input
        type="text"
        value={busID}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={fetchData2}>Fetch Data 2</button>

      <button onClick={fetchData3}>Fetch Weather</button>
        <p style={{ color: 'red' }}>{error}</p>
        <p style={{ color: 'green' }}>{textout}</p>

      

    </div>
  );
}

export default Home;
