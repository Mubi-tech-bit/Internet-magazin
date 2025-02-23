import React from 'react'
import qoshiq from './images/Frame 17.png'
import { NavLink } from 'react-router-dom'
import card from './Apch'
import logo from './images/logo.png'

const News = () => {
    return (
        <div className='w-[1920px] h-auto bg-[white] overflow-hidden m-auto'>
            <div className='ml-[310px] mt-[70px]'>
                <NavLink to="/" className="font-['opens'] font-normal text-[14px] text[#242424]  ">Home|</NavLink>
                <NavLink to="/news" className="font-['opens'] font-normal text-[14px] text-[#BB2339] ">News</NavLink>
            </div>
            <h1 className='font-["cera"] font-bold text-[64px] text-[#242424] text-center '> News</h1>
            <img className='mt-[8px] m-auto' src={qoshiq} alt="" />
            <div className='w-[1300px] h-[1946px]  flex justify-between  flex-wrap  m-auto mt-[60px]'>

                {card.map((value) => {
                    return (
                        <div className='w-[410px] h-[600px] rounded-[14px] border border-[#2424241A] hover:scale-110 duration-[0.5s] overflow-hidden'>
                            <img className='h-[352px] w-[410px]' src={value.img} alt="" />
                            <h1 className='font-["cera"] font-medium text-[24px] text-[#242424] w-[332px] h-[64px ml-[20px] mt-[20px]'>{value.nom}</h1>
                            <p className='w-[361px] h-[72px] font-["opens"] font-normal text-[14px] text-[AAAAAA] ml-[20px] mt-[10px]'>{value.lorem}</p>
                            <h1 className='font-["cera"] font-bold text-[16px] text-[#BB2339] mt-[20px] ml-[20px] mb-[30px] float-left '>{value.link}</h1>
                            <p className='float-right font-["opens"] font-normal text-[14px] text-[#242424] mr-[20px] mt-[20px]'>{value.sana}</p>
                        </div>
                    )
                })}

            </div>
            
            <div className='w-[1406px] h-[413px] border border-[#FFFFFF66] bg-[#BB2339] rounded-[20px] py-[64px] px-[252px] ml-[257px] shadow-[0_22px_0_30px_rgba(86, 86, 86, 0.2)] absolute  z-2 mt-[120px]'>
                <div className='w-[902px] h-[169px]  '>
                    <h1 className='font-["cera"] font-bold text-[23px] text-[white] text-center'>Newsletter</h1>
                    <h1 className='font-["cera"] font-medium text-[48px] text-[white] text-center mt-[25px]'>Subscribe to Our Newsletter</h1>
                    <p className='font-["opens"] font-normal text-[16px] text-[white] text-center mt-[24px]'>And never miss latest Updates!</p>
                </div>
                <input className='w-[635px] h-[52px] rounded-[100px] border border-[#F5EFDB80] bg-transparent mt-[64px]  outline-none py-[14px] px-[19px]' type="email" name="" id="" placeholder='Email Address' />
                <button className='btn btn-ghost w-[144px] h-[52px] border border-white rounded-[100px] py-[12px] px-[32px] text-[white] font-["cera"] font-bold text-[16px] ml-[32px]'>Subscribe </button>
            </div>
            <div className='w-[1920px] h-[710px] bg-[#BB2339] mt-[341px]  z-0  overflow-hidden'>
                <div className='w-[1280px] h-[378px]  m-auto mt-[292px] flex justify-between'>
                    <div className='w-[300px] h-[200px]  mt-[100px]'>
                        <h1 className='font-["cera"] font-normal text-[32px] text-[white] text-center'>Contact Us</h1>
                        <p className='font-["opens"] font-normal text-[16px] text-[white] text-center mt-[24px]'>9 W 53rd St, London, NY 10019, UK</p>
                        <p className='font-["opens"] font-normal text-[16px] text-[white] text-center mt-[10px]'>+1 212-344-1230</p>
                        <p className='font-["opens"] font-normal text-[16px] text-[white] text-center'>+1 212-555-1230</p>
                    </div>
                    <div className='w-[400px]  h-[250px] mt-[70px] ml-[120px]'>
                        <img className='m-auto w-[366px] h-[117px]' src={logo} alt="" />
                        <h1 className='w-438px] h-52px] font-["opens"] font-normal text-[16px] text-[white] text-center mt-[32px] '>"The best way to find yourself is to lose yourself in the service of others.”</h1>
                    </div>
                    <div className='w-[300px] h-[200px]  mt-[100px] ml-[120px]'>
                        <h1 className='font-["cera"] font-normal text-[32px] text-[white] text-center'>Working Hours</h1>
                        <p className='font-["opens"] font-normal text-[16px] text-[white] text-center mt-[24px]'>Monday-Friday</p>
                        <p className='font-["opens"] font-normal text-[16px] text-[white] text-center '>08:00 am - 12:00 am</p>
                        <p className='font-["opens"] font-normal text-[16px] text-[white] text-center mt-[10px]'>Saturday-Sunday</p>
                        <p className='font-["opens"] font-normal text-[16px] text-[white] text-center'>07:00 am - 11:00 pm</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News