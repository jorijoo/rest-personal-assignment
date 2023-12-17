import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import '../../constants/public_env'
import "./Signup.css";
import { ENV } from '../../constants/public_env';

const Signup = () => {
	const [fname, setFname] = useState(null)
	const [lname, setLname] = useState(null)
	const [username, setUsername] = useState(null)
	const [password, setPassword] = useState(null)

	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
 

		axios
			.post(`${ENV.BACKEND}/personal`, { fname, lname, username, pw: password })
			.then((res) => {
				if (res.status === 200) (console.log(`User added`))
				navigate(`/login`)
				alert(`User creation success.`)
				})
			.catch((err) => {
				console.error(err.message)
				alert(`User creation failed, try another username!`)
			})
	}

	return (
		<div className='login template d-flex justify-content-center align-items-center vh-100'>
			<div className='form_container p-5 rounded'>
				<form onSubmit={handleSubmit}>
					<h3 className='text-center'>Sign Up</h3>
					<div className='mb-2'>
						<label htmlFor="fname">First Name</label>
						<input
							type="text"
							placeholder='Enter First Name'
							className='form-control'
							required
							onChange={(e) => setFname(e.target.value)} />
					</div><div className='mb-2'>
						<label htmlFor="lname">Last Name</label>
						<input
							type="text"
							placeholder='Enter Last Name'
							className='form-control'
							required
							onChange={(e) => setLname(e.target.value)} />
					</div>
					<div className='mb-2'>
						<label htmlFor="Username">Username</label>
						<input
							type="text"
							placeholder='Enter username'
							className='form-control'
							required
							onChange={(e) => setUsername(e.target.value)} />
					</div>
					<div className='mb-2'>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							placeholder='Enter Password'
							className='form-control'
							required
							onChange={(e) => setPassword(e.target.value)} />
					</div>

					<div className='d-grid mt-2'>
						<button className='btn btn-primary'>Sign Up</button>
					</div>
					<p className='text-end mt-2'>
						Already Registered?  <Link to="/login" className='ms-2'>Sign in</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default Signup