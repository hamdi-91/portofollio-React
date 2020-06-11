import React from 'react';
import car from './car.png';


const Car = (props)=>  {

return( <img src={car} fill={props.color}  alt='150px'/>)
}

export default Car ;