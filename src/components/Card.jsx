import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarTimes} from "react-icons/fa";
import {AiFillMail} from "react-icons/ai";
import {BiMapPin} from "react-icons/bi"

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

      <div className='card-container border border-dark text-center rounded bg-warning  min-w-50 p-5 shadow-lg'>

        <img className='rounded-5 p-3' src={large} alt="" />


        <h1>{`${title}.${first} ${last}`}
          </h1>


        <h2>{age}</h2>
        <h2>{gender}</h2>
        <h2>{`${city}/${country}`}</h2>
        <h2>{email}</h2>
      

        <div className='d-flex justify-content-evenly mt-4 mb-4'>
          <button>
          <FaCalendarTimes size={20} />
          </button>

          <button>
            <AiFillMail size={20}/>
          </button>

          <button>
            <BiMapPin size={20}/>
          </button>
        
        </div>
         
        </div>



      </div>


    

  )
}

export default Card

