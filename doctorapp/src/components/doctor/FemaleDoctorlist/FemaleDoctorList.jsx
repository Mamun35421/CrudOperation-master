import React, {  useEffect, useState } from 'react';
import * as doctorService from "../../../services/doctorService";
import FemaleDoctorAdd from '../femaleDoctor/FemaleDCreate';


const FemaleDoctorList = () => {

  
    const [doctorList,setDoctorList]=useState([]);
    const [currentId, setCurrentId] = useState(0);
    console.log(doctorList)
   
    
    useEffect(()=>{
      doctorService.GetAll()
      .then(res=>{
         
          setDoctorList(res.data)
      })
  },[doctorList])

  const handleDelete=(model) =>{
    doctorService.Delete(model)
    .then(res=>alert("Sucess Delete"))
    .catch(error=>alert(Error))
  }


  const handleUpdate=(model)=>{
    doctorService.Update(model)
    .then(res=>alert("Updated"))
    .catch(error=>alert(error))
   }


 


    
    return(
        <div className='row'>
          <div className='col-md-4'>
              <FemaleDoctorAdd {...({ currentId, setCurrentId,doctorList})} />
             
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
          <th>Years Of Experience</th>
          <th>Phone No</th>
          <th>BMDC</th>
          <th>Fees</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          {doctorList.map(doctor=>(
             <tr key={doctor.id}>
             <td>{doctor.name}</td>
             <td>{doctor.degree}</td>
             <td>{doctor.yearsOfExperience}</td>
             <td>{doctor.phoneNo}</td>
             <td>{doctor.bmdc}</td>
             <td>{doctor.fees}</td>
             <td>
             <button style={{backgroundColor: "red" }} onClick={()=>handleDelete(doctor)}>Delete</button>
           
             <button style={{backgroundColor: "lightblue"}} onClick={() => { setCurrentId(doctor.id) }}>Edit</button>
                
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