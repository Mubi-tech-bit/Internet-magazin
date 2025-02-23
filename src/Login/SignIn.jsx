import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../Firebase/Config'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function signinHandler(e) {
        e.preventDefault()

        signInWithEmailAndPassword(getAuth(), email, password)
            .then(() => {
                navigate("/")
            })
            .catch(() => {
                alert("Error")
            })

    }
    return (
        <div className='w-[1920px] h-auto bg-white m-auto overflow-hiddenz'>
            <div className="hero bg-white mt-[200px] mb-[200px]">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-[#BB2339] w-[500px] h-[500px] shrink-0 shadow-2xl ">
                        <form className="card-body">
                            <div className="form-control">
                                <h1 className='font-["cera"] text-center text-[25px] text-[white]'>Sign In</h1>
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered bg-transparent " required />
                            </div>
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered bg-transparent " required />
                                <label className="label">
                                    <NavLink to="/forgot" className="label-text-alt link link-hover text-white">Forgot password?</NavLink>
                                    <NavLink to="/signup" className="label-text-alt link link-hover text-white">Do you have any account?</NavLink>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={signinHandler} className="btn btn-ghost border border-white rounded-[100px] text-white">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn