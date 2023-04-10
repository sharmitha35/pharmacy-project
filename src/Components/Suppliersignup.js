import React from 'react'
import '../cssFiles/login.css'
import axios from 'axios'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Usercontext from '../usercontext';

const Suppliersignup = () => {
	const [users,setuser]=useState({
        username:'',email:'',password:'',confirmpassword:''
   })
   let {user,setreguser}=useContext(Usercontext)
   let {reguser,setregguser}=useContext(Usercontext)
   const clearInput=()=>{
        setuser({
          username:'',email:'',password:'',confirmpassword:''
     })
   }
   const navigate=useNavigate()
   const saveuser=async(e)=>{
        try {
          e.preventDefault()
          // const headers={
          //   'Content-type':'application/json'
          // }
        
          await axios.post('http://localhost:4000/user/createUser',users)
          // {
          //   headers:headers
          // }
          .then(async(res)=>{
            console.log(res)
            const user_id=res.data[0].id
            let users1=[]
            const Token=res.data[0].token
            localStorage.setItem("auth-token",Token)
            await axios.get (`http://localhost:4000/user/fetchuser/${user_id}`,{headers:{"x-auth-token":Token}})
            .then(res=>{
              users1=res.data[0]
              user=({
                token:users1.token,
                username:users1.username
              })
              
              setregguser(user)
              navigate('/Supplierlogin')
            })
            .catch(err=>{
              // console.log(err)
              alert(err)
            })
          })
          .catch(err=>{
            // console.log(err)
            alert(err)
          })
          
          
        } catch (error) {
          alert(error)
          console.log("error")
        }
   }
   const datafield=(e)=>{
        setuser({
          ...users,[e.target.name]:e.target.value
        })
   }
  return (
    <div>
                     
<body>
	<section class="login">
		<div class="login_box">
			<div class="left">
				{/* <div class="top_link"><a href="#"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt=""/>Return home</a></div> */}
				<div class="contact">
					<form action="">
						<h3>SUPPLIER SIGN UP </h3>
                        <input type="email" placeholder="EMAIL" onChange={(e) => datafield(e)} required name="email" value={users.email}/>
						<input type="text" placeholder="USERNAME" onChange={(e) => datafield(e)} required name="username" value={users.username}/>
						<input type="password" placeholder="PASSWORD" onChange={(e) => datafield(e)} required name="password" value={users.password}/>
                        <input type="password" placeholder="CONFIRM PASSWORD" onChange={(e) => datafield(e)} required name="confirmpassword" value={users.confirmpassword}/>
						<button class="submit" onClick={saveuser}>CREATE ACCOUNT</button>
					</form>
				</div>
			</div>
			<div class="right">
				<div class="right-text">
					<h2>🌠STAR PHARMACY🌠</h2><br/><br/><br/><br/><br/>
					<h5>⭐ WELCOME BUDDY ⭐</h5>
				</div>
				{/* <div class="right-inductor"><img src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft" alt=""/></div> */}
			</div>
		</div>
	</section>
</body>

    </div>
  )
}

export default Suppliersignup