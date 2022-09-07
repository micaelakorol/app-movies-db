/* eslint-disable no-undef */
import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import '../styles/contact.css'
import swal from 'sweetalert';
const Contact = () => {

  const initialState ={
    names:'',
    email:''
  }

  const [state,setState] = useState(initialState)
  const {names,email} = state;
  
  /* Validations */
  const handleSubmit = (e) => {
    e.preventDefault();
      if(names === '' || email === ''){
        swal ( "Oops" ,  "Fields cannot be empty..." ,  "error" )
    }else{   
        swal("Good!", "We will contact you shortly!", "success");
    }
  setState(initialState)  
  }
  /* ------- */

  const handleChange = (e) =>{
    setState((old) => ({
      ...old,
      [e.target.name]: e.target.value,
  }))}

  return (
    <div className='contact'>
<div className='form-contact'>
  <h2 className='title-contact'>Do you have any doubt? 
    <h4>Contact us!</h4>
      </h2>

<form action="" onSubmit={handleSubmit}>
  <input type="text" name='names' placeholder='Jon Perez' autoComplete='off' onChange={handleChange}
   value={state.names}/>
    <input type="email" name='email' placeholder='example@contact.com' autoComplete='off' onChange={handleChange} value={state.email} />
     <button className='btn-form'>Send</button>
       <Link to='/'> Back </Link>
         </form>
          </div>
           </div>
  )
}

export default Contact