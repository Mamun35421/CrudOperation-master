import axios from "axios"
import {apiUrl} from "../config"

const doctorApiUrl = apiUrl+"doctor/"

export const GetAll=()=>{
   
    return  axios.get(doctorApiUrl)
  }

export const Add=(entityModel)=>{
   
  return  axios.post(doctorApiUrl+"doctorAdd", entityModel)
}


