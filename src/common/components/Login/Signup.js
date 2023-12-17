import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import "./Signup.css";
import { ENV } from '../../constants/public_env';
import { LOCALIZATION } from '../../constants/fi';

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
                if (res.status === 200) (console.log(LOCALIZATION.SUCCESS_USER_ADD))
                navigate(`/login`)
                alert(LOCALIZATION.SUCCESS_USER_ADD)
            })
            .catch((err) => {
                console.error(err.message)
                alert(LOCALIZATION.ERROR_USER_ADD)
            })
    }

    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100'>
            <div className='form_container p-5 rounded'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center'>{LOCALIZATION.REGISTER}</h3>
                    <div className='mb-2'>
                        <label htmlFor="fname">{LOCALIZATION.FNAME}</label>
                        <input
                            type="text"
                            placeholder={`${LOCALIZATION.PLACE} ${LOCALIZATION.FNAME.toLowerCase()}`}
                            className='form-control'
                            required
                            onChange={(e) => setFname(e.target.value)} />
                    </div><div className='mb-2'>
                        <label htmlFor="lname">{LOCALIZATION.LNAME}</label>
                        <input
                            type="text"
                            placeholder={`${LOCALIZATION.PLACE} ${LOCALIZATION.LNAME.toLowerCase()}`}
                            className='form-control'
                            required
                            onChange={(e) => setLname(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Username">{LOCALIZATION.USERNAME}</label>
                        <input
                            type="text"
                            placeholder={`${LOCALIZATION.PLACE} ${LOCALIZATION.USERNAME.toLowerCase()}`}
                            className='form-control'
                            required
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">{LOCALIZATION.PASSWORD}</label>
                        <input
                            type="password"
                            placeholder={`${LOCALIZATION.PLACE} ${LOCALIZATION.PASSWORD.toLowerCase()}`}
                            className='form-control'
                            required
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className='d-grid mt-2'>
                        <button className='btn btn-primary'>{LOCALIZATION.REGISTER}</button>
                    </div>
                    <p className='text-end mt-2'>
                        {LOCALIZATION.REGISTERED_ALREADY}  <Link to="/login" className='ms-2'>{LOCALIZATION.LOGIN}</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup