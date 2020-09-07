import React from 'react'
import "./Card.css";
const Card = ({Robot}) => {
    const {id,name,email} = Robot;
  return(
<div className="container grow ">
        <img src={`https://robohash.org/${id}`} alt="robot"/>
            <h2>{name}</h2>
            <p>{email}</p>
</div>
   )

 }

export default Card;