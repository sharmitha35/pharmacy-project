import React from 'react'
import { Link } from 'react-router-dom'
import '../cssFiles/login.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [users, setuser] = useState({
    username: '', password: ''
  })
  const clearInput = () => {
    setuser({
      username: '', password: ''
    })
  }
  const navigate=useNavigate()
  const loginfield = (e) => {
    try {
      e.preventDefault()
      axios.post('http://localhost:4000/user/login', users)
      .then(res=>{
        if(res.data.message==="login successfully")
          navigate('/Dash')
      })
      // navigate('/Search')
    } catch (error) {
      console.log("error")
    }
  }
  const datafield = (e) => {
    setuser({
      ...users, [e.target.name]: e.target.value
    })
  }
  return (
   
    <div>

    <body>
        <section class="login">
            <div class="login_box">
                <div class="left">

                    <div class="contact">
                        <form onSubmit={loginfield}>
                            <h3>ADMIN LOGIN </h3>
                            <input type="text" placeholder="USERNAME" onChange={(e) => datafield(e)} required name="username" value={users.username} />

                            <input type="password" placeholder="PASSWORD" onChange={(e) => datafield(e)} required name="password" value={users.password}/>
                            <button class="submit" >LET'S GO</button>
                            <h3 className='ss'> Are you a new user?</h3>
                            <Link to="/Signup" id='ww'>

                              <button class='submit'> Sign up</button>

                            </Link>
                        </form>
                    </div>
                </div>
                <div class="right">
                    <div class="right-text">
                        <h2>STAR PHARMACY</h2>
                        <h5>WELCOME BACK!</h5>
                    </div>
                    {/* <div class="right-inductor"><img src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft" alt=""/></div> */}
                </div>
            </div>
        </section>
    </body>

</div>
  )
}
export default Login

