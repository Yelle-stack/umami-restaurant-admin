import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { backendUrl } from '../App'



const AdminTable = () => {
  const [reservations, setReservations] = useState([])

  useEffect(()=> {

    const fetchReservations = async () => {
      try {
        const response = await axios.get(backendUrl + '/api/reservations/get')
        setReservations(response.data)
        console.log(response.data);
        
      } catch (error) {
        console.log("Error fetching reservations");
        
      }
    }

fetchReservations()
  },[])
  return (
    <div>
      AdminTable
    </div>
  )
}

export default AdminTable
