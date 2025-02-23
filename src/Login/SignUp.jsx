import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../Firebase/Config"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    function signUpHandler(e) {
        e.preventDefault()
        if (password == confirmPassword) {
            createUserWithEmailAndPassword(getAuth(), email, password)
                .then(() => {
                    navigate("/")
                })
                .catch(() => {
                    alert("Error")
                })
        }
        else {
            alert("Tasdiqlash kodi xato!")
        }
    }

    return (
        <div className='w-[1920px] h-auto bg-white m-auto overflow-hidden'>
            <div className="hero bg-white mt-[200px] mb-[200px]">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-[#BB2339] w-[500px] h-[500px] shrink-0 shadow-2xl ">
                        <form className="card-body">
                            <div className="form-control">
                                <h1 className='font-["cera"] text-center text-[25px] text-[white]'>Sign Up</h1>
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
                                <label className="label ">
                                    <span className="label-text text-white">Confirm Password</span>
                                </label>
                                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered bg-transparent " required />
                                <label className="label">
                                    <NavLink to="/signin" className="label-text-alt link link-hover text-white">Sign In</NavLink>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={signUpHandler} className="btn btn-ghost border border-white rounded-[100px] text-white">Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp