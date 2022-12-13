import React from 'react'
import "../App.css";


export default function User(props) {
  return (
    <div className='cont'>
        <img src={props.image} alt="Iprofile" />
        <div>
            <div className='Name'>{props.nom}</div>
            <button onClick={props.details}>Detail User</button>
            <button onClick={props.listePosts}>Liste des Postes</button>
        </div>
    </div>
  )
}
