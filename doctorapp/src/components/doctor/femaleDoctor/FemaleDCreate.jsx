import React, { useState } from 'react';
import Doctor from '../doctorModel';
import * as doctorService from "../../../services/doctorService";
const FemaleDoctorAdd = (props) => {
 
    
    const [doctorModel, setDoctorModel] = useState(new Doctor());
    
   
   
    const [errors, setErrors] = useState({})
    

    const resetForm = () => {
        setDoctorModel(new Doctor());
    }


    const validate = (fieldValues = doctorModel) => {
        let temp = { ...errors }
        if ('name' in fieldValues) {
            temp.name = "";
            temp.name += fieldValues.name ? "" : "This field is Required"
        }
  
       
        setErrors({
            ...temp
        })

        if (fieldValues == doctorModel)
            return Object.values(temp).every(x => x == "")

    }

    const saveDoctor = (e) => {
      
        e.preventDefault();

        if (validate()) {
          
          
                doctorService.Add(doctorModel)
                .then(res=>{
                    alert("Submitted successfully", {
                        appearance: "success",
                        autoDismiss: true
                    });
                    resetForm();

                })
                .catch(err=>{
                    alert("Submitted not successfully", {
                        appearance: "danger",
                        autoDismiss: true
                    });
                })
               
         

        }

    }
    

    const handleInputChange = (e) => {
       
        const { name, value } = e.target;
        const fieldsValue = { [name]: value };
        
        setDoctorModel({ ...doctorModel, ...fieldsValue });
       
        validate(fieldsValue)
    }

  

    return (<>
        
        <div className='container'>
        <div className='card'>
        <h2 style={{margin:'auto',padding:'8px'}}> Female Doctor Create</h2>
        </div>
        <div className='row'>
            
                <form >
                <div className="form-group">
                    <label >Name:</label>
                    <input className="form-control" type="text" name="name" value={doctorModel.name} onChange={handleInputChange}/>
                    {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
                </div>
               
                <div className="form-group">
                    <label >Degree:</label>
                    <input className="form-control" type="text" name="degree" value={doctorModel.degree} onChange={handleInputChange} />
                
                </div>
                <div className="form-group">
                    <label >YearsOfExperience:</label>
                    <input className="form-control" type="number" name="yearsOfExperience" value={doctorModel.yearsOfExperience} onChange={handleInputChange} />
                
                </div>
                <div className="form-group">
                    <label >Phone No:</label>
                    <input className="form-control" type="text" name="phoneNo" value={doctorModel.phoneNo} onChange={handleInputChange}  />
                
                </div>
                <div className="form-group">
                    <label >BMDC:</label>
                    <input className="form-control" type="text" name="bmdc" value={doctorModel.bmdc} onChange={handleInputChange} />
                    
                </div>
                <div className="form-group">
                    <label >Fees:</label>
                    <input className="form-control" type="number" name="fees" value={doctorModel.fees} onChange={handleInputChange} />
                
                </div>
                <div className="form-group" style={{marginTop:'5px'}}>
                <button className="btn btn-danger" onClick={saveDoctor}>Save</button>
                </div>
                </form>
        </div>
        </div>
       

    </>

    )
}

export default FemaleDoctorAdd;