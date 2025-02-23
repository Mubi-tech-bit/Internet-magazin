import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../Firebase/Config"
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Forgot = () => {

    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    function sendLinkHandler(e) {
        e.preventDefault()
        sendPasswordResetEmail(getAuth(), email)
        .then(() => {
            navigate("/")
        })
        .catch(() => {
            alert("Error")
        })   
    }

    return (
        <div className='w-[1920px] h-auto bg-white m-auto overflow-hidden'>
            <div className="hero bg-white mt-[200px] mb-[200px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-[#BB2339] w-[500px] h-[300px] shrink-0 shadow-2xl ">
                        <form className="card-body">
                            <div className="form-control">
                                <h1 className='font-["cera"] text-center text-[25px] text-[white]'>Forgot Password</h1>
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered bg-transparent " required />
                            </div>
                            <label className="label">
                                <NavLink to="/signup" className="label-text-alt link link-hover text-white">Sign Up</NavLink>
                            </label>
                            <div className="form-control mt-6">
                                <button onClick={sendLinkHandler} className="btn btn-ghost border border-white rounded-[100px] text-white">Reset Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot
