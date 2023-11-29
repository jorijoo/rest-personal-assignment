import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { effect, signal } from '@preact/signals-react'




    
 

const Login = () => {

const [username, setUsername] = useState('')
const [pw, setPw] = useState('')
const token = signal('')


axios.postForm('http://localhost:3000/Login', {username, pw})
    .then(resp => token.value = resp.data.jwtToken)
    .catch(error => console.log(error.message))

  return (
    <div className='login_template d-flex justify-content-center align-items-center vh-100'>
        <div className='form_container p-5 rounded'>
        <form>
            <h3 className='text-center'>Sign In</h3>
            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input value={username} onChange={e => setUsername(e.target.value)}  type="email" placeholder='Enter Email' className='form-control'/> 
            </div>
            <div className='mb-2'>
                <label htmlFor="password">Password</label>
                <input value={pw} onChange={e => setPw(e.target.value)}type="password" placeholder='Enter Password' className='form-control'/> 
            </div>
            <div className='mb-2'>
                <input type="checkbox" className='custom-control custom-checkbox'id="check"/>
                <label htmlFor="check" className='custom-input-label ms-2'>
                    Remember me
                </label>
            </div>
            <div className='d-grid'>
                <button onClick={Login} className='btn btn-primary'>Sign in</button>
            </div>
            <p className='text-end mt-2'>
                Forgot <a href="">Password?</a> <Link to="/signup" className='ms-2'>Sign up</Link>
            </p>            
        </form>
        </div>
    </div>
  )
}

export default Login