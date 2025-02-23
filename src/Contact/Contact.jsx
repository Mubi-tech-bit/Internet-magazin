import React from 'react'
import { NavLink } from 'react-router-dom'
import qoshiq from './images/qoshi.png'
import cont from './Me'
import phone from './images/phone.png'
import mail from './images/mail.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'
import facebook from './images/facebook.png'
import lk from './images/lk.png'
import logo from './images/logo.png'

const Contact = () => {
    const ikon = {
        1: phone,
        2: mail,
        3: instagram,
        4: twitter,
        5: facebook
    }
    console.log(ikon[2]);

    return (
        <div className='w-[1920px] h-auto bg-white m-auto overflow-hidden '>
            <div className='ml-[310px] mt-[70px]'>
                <NavLink to="/" className="font-['opens'] font-normal text-[14px] text[#242424]  ">Home|</NavLink>
                <NavLink to="/contact" className="font-['opens'] font-normal text-[14px] text-[#BB2339] ">Contact Us</NavLink>
            </div>
            <h1 className='font-["cera"] font-bold text-[64px] text-[#242424] text-center '> Contact Us</h1>
            <img className='mt-[8px] m-auto' src={qoshiq} alt="" />
            <div className='w-[420px] h-[610px]  ml-[310px] mb-[110px] float-left mt-[40px]'>
                {cont.map((value) => {
                    return (
                        <div className='w-[420px] h-[110px] border border-[ #2424241A] rounded-[14px] mb-[15px] flex'>
                            <div className='w-[60px] h-[60px] rounded-[50%] bg-[#2424240D] mt-[25px] ml-[20px] overflow-hidden'> <img className='w-[24px] h-[24px] ml-[18px] mt-[18px]' src={ikon[value.id]} alt="" /></div>
                            <h1 className='font-["opens"] font-semibold text-[22px] text-[#242424] mt-[27px] ml-[25px]'>{value.title}</h1>
                            <p className='font-["opens"] font-normal text-[14px] text-[#242424] mt-[64px] absolute z-2 ml-[105px]'>{value.p}</p>
                        </div>
                    )
                })}
            </div>
            <div className='w-[790px] h-[610px] border border-[ #2424241A] rounded-[14px] ml-[780px] mt-[40px] py-[40px] px-[40px]'>
                <h1 className='font-["opens"] font-semibold text-[38px] text-[#242424]'>Send Messege</h1>
                <p className='font-["opens"] font-normal text-[16px] text-[#242424] mt-[16px] w-[565px] h-[48px]'>If you have any questions, you can send us an SMS or contact us by phone you can also contact us via social networks.</p>
                <div className='w-[710px] h-[131px] mt-[40px]'>
                    <input className='w-[345px] h-[58px] border border-[#3322441A] rounded-[12px] p-[20px] bg-transparent outline-none' type="text" placeholder='Your name' />
                    <input className='w-[345px] h-[58px] border border-[#3322441A] rounded-[12px] p-[20px] bg-transparent outline-none ml-[15px]' type="email" placeholder='Email address' />
                    <input className='w-[345px] h-[58px] border border-[#3322441A] rounded-[12px] p-[20px] bg-transparent outline-none mt-[10px]' type="number" placeholder='Phone number' />
                    <input className='w-[345px] h-[58px] border border-[#3322441A] rounded-[12px] p-[20px] bg-transparent outline-none mt-[10px] ml-[15px]' type="text" placeholder='Subject' />
                </div>
                <input className='w-[710px] h-[150px] border border-[#3322441A] rounded-[14px] bg-transparent mt-[15px] p-[20px] outline-none' type="text" placeholder='Message' />
                <button className='w-[214px] h-[61pxx] py-[18px] px-[45px] rounded-[39px] bg-[#BB2339] text-white font-["opens"] mt-[25px]'>Send message</button>
            </div>
            <h1 className='font-["cera"] font-medium text-[38px] text-black text-center mt-[110px]'>Find Us By Card</h1>
            <img className='mt-[40px] m-auto' src={lk} alt="" />
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

export default Contact