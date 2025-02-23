import React from 'react'
import oqat from './images/oqat.png'
import Swiper from 'swiper'
import { Outlet } from 'react-router-dom'
import SwiperKarusel from './SwiperKarusel'
import { taom, malumot, card } from './Apix'
import qoshi from './images/spoon.png'
import SwKar from './SwKar'
import qoshiq from './images/qoshi.png'
import bmp from './images/bmp.mp4'
import Swk from './Swk'
import logo from './images/logo.png'

const Home = () => {

  return (
    <div className=' w-[1920px] overflow-hidden m-auto bg-[white]z'>
      <div className="header bg-[#BB2339] overflow-hidden">
        <div className=' w-[1477px]  h-[604px] ml-[310px] mt-[80px] mb-[237px] flex'>
          <div className="w-[555px] h-[477px]  mt-[70px]">
            <h1 className='  font-["cera"] text-white text-[23px] font-bold '>Chase the new Flavour</h1>
            <h1 className='  font-["cera"] text-white text-[93px] font-bold mt-[8px]'>The key to Fine dining</h1>
            <p className='text text-[16px] w-[453px] h-[84px] mt-[20px] text-[white]'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <button className="btn btn-ghost border border-white w-[173px] h-[44px] rounded-[100px] text-white mt-[40px]">Explore Menu</button>
          </div>
          <img className='ml-[98px]' src={oqat} alt="" />
        </div>
      </div>
      <div className="kar overflow-hidden bg-[#F8F8F8] w-[100%] h-[724px]">
        <div className="karusel  w-[1301px]  m-auto mb-[120px]">
          <h1 className='font-["cera"] text-[#BB2339] font-medium text-[48px] mt-[120px] mb-[40px]'>Popular Dishes</h1>
          <SwiperKarusel />
          <h1 className='mt-[20px]'></h1>
        </div>
      </div>
      <div className="map w-[1345px] h-[1375px]  m-auto mt-[120px] mb-[120px]">
        <h1 className='font-["cera"] text-[#BB2339] font-medium text-[48px] mb-[60px]'>Our Regular Menu Pack</h1>
        <div className="div w-[100%]  h-[48px] flex justify-between gap-[10px]">
          <button className="btn btn-ghost  py-[10px] px-[30px] border border-[#BB2339]  h-[44px] rounded-[100px] text-[#BB2339] hover:text-[white] hover:bg-[#BB2339] ">All</button>
          <button className="btn btn-ghost  py-[10px] px-[30px] border border-[#BB2339]  h-[44px] rounded-[100px] text-[#BB2339] hover:text-[white] hover:bg-[#BB2339] ">Shawarma</button>
          <button className="btn btn-ghost  py-[10px] px-[30px] border border-[#BB2339]  h-[44px] rounded-[100px] text-[#BB2339] hover:text-[white] hover:bg-[#BB2339] ">Turk Kebab</button>
          <button className="btn btn-ghost  py-[10px] px-[30px] border border-[#BB2339]  h-[44px] rounded-[100px] text-[#BB2339] hover:text-[white] hover:bg-[#BB2339] ">Hamburger Kebab</button>
          <button className="btn btn-ghost  py-[10px] px-[30px] border border-[#BB2339]  h-[44px] rounded-[100px] text-[#BB2339] hover:text-[white] hover:bg-[#BB2339] ">Doner Kebab</button>
          <button className="btn btn-ghost  py-[10px] px-[30px] border border-[#BB2339]  h-[44px] rounded-[100px] text-[#BB2339] hover:text-[white] hover:bg-[#BB2339] ">Shish Kebab</button>
          <button className="btn btn-ghost  py-[10px] px-[30px] border border-[#BB2339]  h-[44px] rounded-[100px] text-[#BB2339] hover:text-[white] hover:bg-[#BB2339] ">French Fries Pizza</button>
          <button className="btn btn-ghost  py-[10px] px-[30px] border border-[#BB2339]  h-[44px] rounded-[100px] text-[#BB2339] hover:text-[white] hover:bg-[#BB2339] ">Desserts</button>
        </div>
        <div className='flex flex-wrap justify-between gap-[20px] mt-[50px]'>
          {taom.map((value) => {
            return (
              <div className='w-[310px] h-[366px] rounded-[14px] border border-[#2424241A] hover:scale-105 duration-[0.5s]' key={value.id}>
                <img className='w-[270px] h-[183px] m-auto mt-[20px]' src={value.img} alt="" />
                <h2 className='font-["opens"] font-semibold text-[18px] w-[270px] h-[50px] text-center text-[#242424] m-auto mt-[10px]'>{value.title}</h2>
                <h3 className='mt-[30px] font-["opens"] font-bold text-[24px] text-[#BB2339] text-center'>${value.price}</h3>
              </div>
            )
          })}
        </div>
      </div>
      <div className="map2 w-[100%] h-[645px] bg-[#F4F4F4] overflow-hidden">
        <div className="texte  w-[418px] h-117px]  m-auto mt-[100px]">
          <h1 className='font-["cera"] font-bold text-[23px] text-[#242424] text-center '> Testimony</h1>
          <img className='mt-[8px] m-auto' src={qoshi} alt="" />
          <h1 className='font-["cera"] font-normal text-[48px] text-[#242424] text-center'>Happy customers</h1>
        </div>
        <div className='w-[1300px] h-[205px] m-auto  mt-[60px]'>
          <SwKar />
        </div>
      </div>
      <div className='w-[100%] h-auto '>
        <div className='w-[1300px] h-[855px]  m-auto mt-[120px] mb-[120px] '>
          <div className="texte  w-[418px] h-117px]  m-auto ">
            <h1 className='font-["cera"] font-bold text-[23px] text-[#242424] text-center '> News</h1>
            <img className='mt-[8px] m-auto' src={qoshiq} alt="" />
            <h1 className='font-["cera"] font-medium text-[48px] text-[#BB2339] text-center'>Gericht updates</h1>
          </div>
          <div className='w-[1300px] h-[678px]  mt-[60px] flex justify-between  '>
            {card.map((value) => {
              return (
                <div className='w-[410px] h-[600px] rounded-[14px] border border-[#2424241A] hover:scale-110 duration-[0.5s] overflow-hidden' key={value.id}>
                  <img className='h-[352px] w-[410px]' src={value.img} alt="" />
                  <h1 className='font-["cera"] font-medium text-[24px] text-[#242424] w-[332px] h-[64px ml-[20px] mt-[20px]'>{value.nom}</h1>
                  <p className='w-[361px] h-[72px] font-["opens"] font-normal text-[14px] text-[AAAAAA] ml-[20px] mt-[10px]'>{value.lorem}</p>
                  <h1 className='font-["cera"] font-bold text-[16px] text-[#BB2339] mt-[20px] ml-[20px] mb-[30px] float-left '>{value.link}</h1>
                  <p className='float-right font-["opens"] font-normal text-[14px] text-[#242424] mr-[20px] mt-[20px]'>{value.sana}</p>
                </div>
              )
            })}
          </div>
          <button className='btn btn-ghost border border-[#BB2339] text-[#242424] font-["opens"] font-bold text-[16px] rounded-[100px] py-[8px] px-[32px] ml-[580px]'>View More</button>
        </div>
      </div>
      <div className='w-[100%]'>
        <video className='w-[100%] h-[763px] ' controls src={bmp}></video>
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

export default Home