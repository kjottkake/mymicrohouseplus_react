import React, { useState, useEffect } from 'react';
import './testpage.css';
const TestPage = () => {

    const [count, setCount] = useState(89);

    useEffect(() => {
      const interval = setInterval(() => {
        if (count < 100) {
          setCount(count + 1);
        } else {
          clearInterval(interval); // Stop the counting animation when it reaches 100
        }
      }, 25); // You can adjust the interval duration for the counting speed
  
      return () => {
        clearInterval(interval); // Cleanup the interval on component unmount
      };
    }, [count]);


  return (
    <div className='homePanel'>
      <h1><a href='/'>myMicrohouse+</a></h1>

      <div className="counting-animation">
      <span className="count">{count}</span>
    </div>


    </div>
  );
};

export default TestPage;