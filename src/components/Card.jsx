import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsGenderFemale } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { BiMapPin } from "react-icons/bi"

const Card = ({ user }) => {





  const {
    picture: { large },
    name: { title, first, last },
    dob: { age },
    gender,
    location: { city, country },
    email
  } = user






  return (

    <div className='main-container d-flex align-item-center justify-content-center  mt-4 '>

      <div className='card-container border border-dark text-left rounded bg-warning  min-w-50 p-5 shadow-lg'>

        <img className='rounded-5 p-3 mx-auto d-flex' src={large} alt="" />


        <h1 className='ms-5 d-flex mb-5 '>{`${title}.${first} ${last}`}
        </h1>


        <h3>{age}</h3>


        <h3>{gender}
          <BsGenderFemale className='text-primary ms-3' size={25} /></h3>


        <h3>{`${city}/${country}`}
          <BiMapPin className='text-success ms-3 ' size={25} /></h3>


        <h3>{email}
          <AiFillMail className='text-danger ms-3' size={25} /></h3>


      </div>



    </div>




  )
}

export default Card

