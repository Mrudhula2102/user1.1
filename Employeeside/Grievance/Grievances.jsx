import React from 'react';
import GrievanceForm from './GrievanceForm';
import Topbare from '../Topbare';


const Grievances = (props) => {

  return (
    <div align="center">
      <Topbare xxx={props.checkLogout}/>
      <h1 className='h1'>Grievances Page</h1>
      <GrievanceForm/>
     </div>
  );
};

export default Grievances;
