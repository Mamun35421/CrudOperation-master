
import React, { Component, useEffect, useState } from 'react';


import { useToasts } from "react-toast-notifications";


import * as doctorService from "../../../services/doctorService";
import FemaleDCreate from '../femaleDoctor/FemaleDCreate';



const FemaleDoctorList = () => {
    const { addToast } = useToasts();
    const [fdoctorList,setFdoctorList]=useState([]);
    const [currentId, setCurrentId] = useState(0)
    
    useEffect(()=>{
        doctorService.GetAll()
        .then(res=>{
           
            setFdoctorList(res.data)
        })
        .catch(err=>{
            addToast("Unable To Get", {
                appearance: "error",
                autoDismiss: true
            });
        })
    
    },[fdoctorList])


    return(
        <div className='row'>
          <div className='col-md-4'>
              <FemaleDCreate {...({ currentId, setCurrentId,fdoctorList })} />
             
          </div>
          <div className='col-md-8'>
            <div className='card'>
            <h2 style={{margin:'auto',padding:'8px'}}>Female Doctor List</h2>
            </div>
         
          <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Degree</th>
        
         
        </tr>
      </thead>
      <tbody>
          {fdoctorList.map(doctor=>(
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.degree}</td>
             
            

              
            </tr>
          ))}
        
      
      </tbody>
            </table>
         </div>
        </div>
        
    )
}

export default FemaleDoctorList;