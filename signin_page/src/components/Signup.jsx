import React, { useState } from 'react'
import '../CSS/Signup.css'

const Signup = () => {
    const [IsLogin,setCount] = useState("Login")

  return (
    <>
        <div className="Container">
            <h1 className='Heading'>{IsLogin} Page</h1>
            {IsLogin === "Login" ? <div>
                <form action="" className='form'>
                    <label htmlFor="">UserName :</label>
                    <input type="text" />
                    <label htmlFor="">Password :</label>
                    <input type="password" />
                </form>
            </div> : <div>
                <form action="" className='form'>
                    <label htmlFor="">Name :</label>
                    <input type="text" />
                    <label htmlFor="">Email :</label>
                    <input type="email" />
                    <label htmlFor="">UserName :</label>
                    <input type="text" />
                    <label htmlFor="">Create Password :</label>
                    <input type="password" />
                    <label htmlFor="">Confirm Password :</label>
                    <input type="password" />
                </form>
            </div> }
            <div className='buttons'>
                <button className={IsLogin === "Login" ? "YellowButton" : "WhiteButton"} onClick={()=>setCount("Login" )}>Login</button>
                <button className={IsLogin === "Signup" ? "YellowButton" : "WhiteButton"} onClick={()=>setCount("Signup")}>Signup</button>
            </div>
        </div>    
    </>
  )
}

export default Signup
