
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, []);

  // useEffect(()=>{
  //   try{
  //     (async function fetchData(){
  //       const response =await fetch('https://dummyjson.com/products');
  //       const data = await response.json();
  //       setData(data);
  //     })();

  //   }catch(error){
  //     alert(error.message)
  //   }

  // },[])

  return (
    <div>
    <h1>Data Fetched from API</h1>
    {error ? (
      <p>An error occurred: {error}</p>
    ) : data ? (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
}

export default App

{/* <h1>Data Fetched from API</h1> */}