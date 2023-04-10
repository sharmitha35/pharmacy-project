import React from 'react'
import  { useState,useEffect} from 'react'
import '../cssFiles/requestedlist.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
const SupDash = () => {
    const [disp,setdisp]=useState([])
    const[status,setStatus]=useState('pending')
    let datas=[]
    const display=()=>{
        axios.get('http://localhost:4000/user/display')
        .then(res=>{
            datas=res.data
            setdisp(datas)
        })
    }
    useEffect(() => {
        display();
      }, []);
    const deleteUser = async (id) => {
        try {
          await axios.delete(`http://localhost:4000/user/postmedicine/${id}`);
          display();
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div>
            
            <table id="tb" class="  table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sno</th>
                        <th>Supplier name</th>
                        <th>Shop name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Drug name</th>
                        <th>Quantity</th>
                        <th>Deliver Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        disp.map(user => (
                            <tr>
                                <td>
                                    {user.sno}
                                </td>
                                <td>
                                    {user.supplier_name}
                                </td>
                                <td>
                                    {user.shopname}
                                </td>
                                <td>
                                    {user.email}
                                </td>

                                <td>
                                    {user.contact}
                                </td>
                                <td>
                                    {user.drugname}
                                </td>
                                <td>
                                    {user.quantity}
                                </td>
                                <td>
                                    {user.order_date}
                                </td>
                                <td>
                                    {user.status}
                                </td>
                                <td>

                                    {/* <button class="btn btn primary" onClick={get}>Edit</button> */}
                                    <button className='one'>Accept</button>
                                    <button className='two' >Reject</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SupDash
