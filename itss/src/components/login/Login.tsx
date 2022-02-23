import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const validator =  /^(([A-Za-z]{4,15}@[A-Za-z]{4,15}\.[a-z]{2,3}))$/;
    const passValidator = /^(([A-Za-z0-6_\-@\%\+]{8,20}))$/;

    const connect = () => {
        if (validator.test(email) && passValidator.test(password))
            navigate("/products")
    }

  return (
    <div className='w-screen h-screen overflow-hidden flex flex-col justify-center items-center relative'>
        <img src="./images/background.png" alt="background" className="w-full h-full object-cover object-center absolute z-0" />
        <div className='z-10 w-[30rem] h-[30rem] rounded-3xl bg-white shadow-md shadow-black/50 flex flex-col justify-around items-center py-14'>
            <h1 className='text-Primary font-semibold text-xl'>
                CONNEXION
            </h1>
            <div className=' flex flex-col justify-center items-center space-y-8'>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"
                    className="outline-none border border-border focus:border-gray-400 rounded-md px-3 py-1.5 shadow-sm text-input"
                />
                <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="mot de passe"
                    className="outline-none border border-border focus:border-gray-400 rounded-md px-3 py-1.5 shadow-sm text-input"
                />
            </div>
            <button onClick={connect} className=' bg-Primary text-white py-1 px-3 rounded-md text-sm'>
                SE CONNECTER
            </button>
        </div>
    </div>
  )
}

export default Login