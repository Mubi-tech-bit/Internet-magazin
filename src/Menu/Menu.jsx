import React from 'react'
import { NavLink } from 'react-router-dom'
import Appi from './Appi'
import menyu from './Appi'
import Swk from './Swk'
import qoshiq from './images/qoshi.png'
import logo from './images/logo.png'

const Menu = () => {
    return (
        <div className='w-[1920px] h-auto overflow-hidden m-auto bg-[white]'>
            <div className='ml-[310px] mt-[70px]'>
                <NavLink to="/" className="font-['opens'] font-normal text-[14px] text[#242424]  ">Home|</NavLink>
                <NavLink to="/menu" className="font-['opens'] font-normal text-[14px] text-[#BB2339] ">Menu</NavLink>
            </div>
            <div className='flex'>
                <div className='w-[428px] h-[844px] bg-[#BB2339] rounded-[20px] mt-[20px] ml-[310px] overflow-hidden'>
                    <h1 className='font-["cera"] font-medium text-[40px] text-[white] ml-[40px] mt-[50px]'>Our Regular Menu Pack</h1>
                    <div className='w-[181px] h-[592px]  ml-[40px] mt-[40px]'>
                        <button className='btn btn-ghost py-[10px] px-[30px] border border-[white] rounded-[100px] text-white font-["opens"] font-semibold text-[16px] '>All</button>
                        <button className='btn btn-ghost py-[10px] px-[30px] border border-[white] rounded-[100px] text-white font-["opens"] font-semibold text-[16px] mt-[20px]'>KEBABS</button>
                        <button className='btn btn-ghost py-[10px] px-[30px] border border-[white] rounded-[100px] text-white font-["opens"] font-semibold text-[16px] mt-[20px]'>PIDES</button>
                        <button className='btn btn-ghost py-[10px] px-[30px] border border-[white] rounded-[100px] text-white font-["opens"] font-semibold text-[16px] mt-[20px]'>BURGERS</button>
                        <button className='btn btn-ghost py-[10px] px-[30px] border border-[white] rounded-[100px] text-white font-["opens"] font-semibold text-[15px] mt-[20px]'>OTHER DISHES</button>
                        <button className='btn btn-ghost py-[10px] px-[30px] border border-[white] rounded-[100px] text-white font-["opens"] font-semibold text-[16px] mt-[20px]'>SIDES</button>
                        <button className='btn btn-ghost py-[10px] px-[30px] border border-[white] rounded-[100px] text-white font-["opens"] font-semibold text-[16px] mt-[20px]'>DRINKS</button>
                        <button className='btn btn-ghost py-[10px] px-[30px] border border-[white] rounded-[100px] text-white font-["opens"] font-semibold text-[16px] mt-[20px]'>DESSERTS</button>
                        <button className='btn btn-ghost py-[10px] px-[30px] border border-[white] rounded-[100px] text-white font-["opens"] font-semibold text-[16px] mt-[20px]'>MEAL DEALS</button>
                    </div>
                </div>
                <div className='flex w-[836px] flex-wrap gap-[36px] ml-[36px] mb-[294px]'>
                    {menyu.map((value) => {
                        return (
                            <div className='w-[310px] h-[366px] rounded-[14px] border border-[#2424241A] hover:scale-105 duration-[0.5s]'>
                                <img className='w-[270px] h-[183px] m-auto mt-[20px]' src={value.img} alt="" />
                                <h2 className='font-["opens"] font-semibold text-[18px] w-[270px] h-[50px] text-center text-[#242424] m-auto mt-[10px]'>{value.title}</h2>
                                <h3 className='mt-[30px] font-["opens"] font-bold text-[24px] text-[#BB2339] text-center'>${value.price}</h3>
                            </div>
                        )
                    })}
                </div>



            </div>

            <div className='w-[2498px] h-[705px ]  overflow-hidden bg-[#F4F4F4]'>
                <div className='w-[2188px] h-[447px]  ml-[310px] mt-[128px] mb-[130px] flex'>
                    <div className='w-[491px] h-[265px] mt-[91px] '>
                        <h1 className='font-["cera"] font-bold text-[23px] text-[#242424] '> Instagram</h1>
                        <img className='mt-[8px] ' src={qoshiq} alt="" />
                        <h1 className='font-["cera"] font-medium text-[48px] text-[#242424]'>Photo Gallery</h1>
                        <p className='h-[56px] font-["opens"] font-normal text-[16px] text-[#AAAAAA] mt-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                        <button className='btn btn-ghost border border-[#BB2339] text-[#242424] font-["opens"] font-bold text-[16px] rounded-[100px] py-[8px] px-[32px] mt-[24px] '>View More</button>
                    </div>
                    <div className='w-[1300px] h-[447px]  ml-[64px] flex'>
                        <Swk />
                    </div>
                </div>
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

export default Menu