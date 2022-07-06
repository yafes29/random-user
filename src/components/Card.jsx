import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Card = ({ user }) => {

  

  const {
    picture: { large },
    name: { title, first, last },
    dob: { age },
    gender: { gender },
    location: { city, country },
    email
  } = user






  return (

    <div className='main-container d-flex align-item-center justify-content-center  mt-4 '>

      <div className='card-container border border-dark text-center rounded bg-warning  w-25'>

        <img className='rounded-5 p-3' src={large} alt="" />
        <h1>{`${title}.${first} ${last}`}</h1>
        <h2>{age}</h2>
        <h2>{gender}</h2>
        <h2>{`${city}/${country}`}</h2>
        <h2>{email}</h2>




      </div>


    </div>

  )
}

export default Card
