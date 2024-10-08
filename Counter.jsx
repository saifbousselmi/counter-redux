import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../JS/Actions'; 
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';


const Counter = () => {
  const count = useSelector((state) => state.count); 
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-display">Count: {count}</h1>
      <div>
        <button className="counter-button" onClick={() => dispatch(increment())}>
          <FaPlus /> Increment
        </button>
        <button 
          className="counter-button" 
          onClick={() => {
            if (count > 0) {
              dispatch(decrement());
            }
          }}
          disabled={count === 0} 
        >
          <FaMinus /> Decrement
        </button>
        <button className="counter-button" onClick={() => dispatch(reset())}>
          <GrPowerReset /> Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
