import { Button, TextField } from '@mui/material';
import './grievance.css'
import React, { useState } from 'react';
import axios from 'axios';

const GrievanceForm = () => {
  var [grievance,setgrievance]=useState({"grievance":''});

  const inputhandler =(event)=> {
    const {name,value}=event.target
    setgrievance((grievance)=>({...grievance,[name]:value}))
    console.log(grievance)
}
  const savedata =(event) =>{
   event.preventDefault();
   axios.post("http://localhost:4005/grievance",grievance)
   .then((response) =>{
   alert("Submitted")
   
   })
   .catch(err=>console.log(err))
   }
  return (
  
    
    <div className='media'>
    <div className='body'>
    <form className='form'>
    <label className='label' htmlFor="grievance"> Your Grievance:</label> &nbsp;
    <TextField className='textarea' id="grievance" name="grievance" rows="4" onChange={inputhandler}/><br/><br/>
    <Button className='button' type="submit" variant='contained'onClick={savedata}>Submit</Button>
  </form>

  </div>
  </div>
  );
};

export default GrievanceForm;
