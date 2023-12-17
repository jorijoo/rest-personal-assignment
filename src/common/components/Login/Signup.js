import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100'>
    <div className='form_container p-5 rounded'>
    <form>
        <h3 className='text-center'>Rekisteröidy</h3>
        <div className='mb-2'>
            <label htmlFor="fname">Etunimi</label>
            <input type="text" placeholder='Etunimi' className='form-control'/> 
        </div><div className='mb-2'>
            <label htmlFor="lname">Sukunimi</label>
            <input type="text" placeholder='Sukunimi' className='form-control'/> 
        </div>
        <div className='mb-2'>
            <label htmlFor="email">Sähköposti</label>
            <input type="email" placeholder='Email' className='form-control'/> 
        </div>
        <div className='mb-2'>
            <label htmlFor="password">Salasana</label>
            <input type="password" placeholder='Salasana' className='form-control'/> 
        </div>
       
        <div className='d-grid mt-2'>
            <button className='btn btn-primary'>Rekisteröidy</button>
        </div>
        <p className='text-end mt-2'>
          Kirjautunut jo  <Link to="/login" className='ms-2'>Kirjaudu sisään</Link>
        </p>            
    </form>
    </div>
</div>
  )
}

export default Signup