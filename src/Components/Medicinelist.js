import React from 'react'
import  { useState,useEffect} from 'react'
import Dashboard from './Dashboard'
import '../cssFiles/requestedlist.css'
import axios from 'axios'
const Medicinelist = () => {
    const [disp,setdisp]=useState([])
    let datas=[]
    const display=()=>{
        axios.get('http://localhost:4000/user/displayy')
        .then(res=>{
            datas=res.data
            setdisp(datas)
        })
    }
    useEffect(()=>{
        display()
    },[])
    return (
        <div>
             <div className='content'>
                 <Dashboard/>
            </div>
			<div class="container">
            <table class="rwd-table">
                <thead>
                    <tr>
                        <th scope="col">Sno</th>
                        <th>Medicine name</th>
                        <th>Quantity</th>
                        <th>Expiry Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        disp.map(user => (
                            <tr>
                                <td data-th="Sno">
                                    {user.sno}
                                </td>
                                <td data-th="Medicine name">
                                    {user.medicine_name}
                                </td>
                                
                                <td data-th="Quantity">
                                    {user.quantity}
                                </td>
                                <td data-th="Expiry Date">
                                    {user.expiry_date}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
			
</div> 
        </div>
    )
}

export default Medicinelist


// import React from 'react'
// import  { useState,useEffect} from 'react'
// import axios from 'axios'
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

// import '../cssFiles/SuperResponsivetableStyle.css';
// // import '../cssFiles/requestedlist.css'
// const Medicinelist = () => {
// 	const [disp,setdisp]=useState([])
//     let datas=[]
//     const display=()=>{
//         axios.get('http://localhost:4000/user/displayy')
//         .then(res=>{
//             datas=res.data
//             setdisp(datas)
//         })
//     }
//     useEffect(()=>{
//         display()
//     },[])

//     return(

//     <div>
// <Table>
// 	<Thead>
// 		<Tr>
// 		<Th>Sno</Th>
// 		<Th>Medicine name</Th>
//         <Th>Quantity</Th>
//         <Th>Expiry Date</Th>
// 		</Tr>
// 	</Thead>
// 	<Tbody>
		
// 		{
//                         disp.map(user => (
//                             <Tr>
//                                 <Td>
//                                     {user.sno}
//                                 </Td>
//                                 <Td>
//                                     {user.medicine_name}
//                                 </Td>
                                
//                                 <Td>
//                                     {user.quantity}
//                                 </Td>
//                                 <Td>
//                                     {user.expiry_date}
//                                 </Td>
                               
//                                 {/* <td>

//                                     <button class="btn btn primary" onClick={get}>Edit</button>
//                                     <button class="btn btn primary" onClick={get}>Delete</button>
//                                 </td> */}
//                             </Tr>
//                         ))
//                     }
// 	</Tbody>
// </Table>
// </div>
//     )
// }
// export default Medicinelist;