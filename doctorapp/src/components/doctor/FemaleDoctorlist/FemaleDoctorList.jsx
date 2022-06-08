import React, {  useEffect, useState } from 'react';
import * as doctorService from "../../../services/doctorService";
import FemaleDoctorAdd from '../femaleDoctor/FemaleDCreate';

const FemaleDoctorList = () => {

  
    const [doctorList,setDoctorList]=useState([]);
    console.log(doctorList)
   
    
    useEffect(()=>{
        doctorService.GetAll()
        .then(res=>{
           
            setDoctorList(res.data)
        })
    },[doctorList])


 


    
    return(
        <div className='row'>
          <div className='col-md-4'>
              <FemaleDoctorAdd {...({ doctorList })} />
             
          </div>
          <div className='col-md-8'>
            <div className='card'>
            <h2 style={{margin:'auto',padding:'8px'}}> Female Doctor List</h2>
            </div>
         
          <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
       
          <th>Degree</th>
       
          
        </tr>
      </thead>
      <tbody>
          {doctorList.map(doctor=>(
            <tr key={doctor.id}>
            
              <td>{doctor.name}</td>
          
              <td>{doctor.degree}</td>
              
            
              <td>    

                         
              </td>

              
            </tr>
          ))}
        
      </tbody>
            </table>
         </div>
        </div>
        
    )
}

export default FemaleDoctorList;