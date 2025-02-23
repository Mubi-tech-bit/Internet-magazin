import React from 'react'
import qoshiq from './images/Frame 17.png'
import turk from './images/turk.png'
import logo from './images/logo.png'

const About = () => {
    return (
        <div className='w-[1920px] h-auto  bg-white m-auto overflow-hidden'>
            <h1 className='  font-["cera"] font-bold text-[64px] text-[#242424] text-center mt-[70px]'> About Us</h1>
            <img className='  mt-[8px] m-auto' src={qoshiq} alt="" />
            <h1 className='m-auto w-[720px] h-[192px] font-["opens"] font-normal text-[20px] text-[#242424] mt-[40px] leading-[32px] tracking-[4%] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet <br /> eu proin mauris et.Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. <br /> Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed <br /> odio nec aliquet eu proin mauris et.</h1>
            <img className='m-auto mt-[30px]' src={turk} alt="" />
            <h1 className='m-auto w-[720px] h-[192px] font-["opens"] font-normal text-[20px] text-[#242424] mt-[40px] leading-[32px] tracking-[4%] text-left mb-[130px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra <br /> adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet <br /> eu proin mauris et.Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
                Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed <br /> odio nec aliquet eu proin mauris et. <br /> It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. </h1>
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

export default About