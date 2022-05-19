import React from 'react'
import './../css/Home.css'
import homep from '../images/homep.png'
function Home() {
  return (
    <div className='home'>
        <div> 
           <span> <img src={homep} alt="" /> </span>
        </div>
        <h1 className='font-serif text-white text-5xl p-12 mt-14 ml-14'>Not only People <br/> Need a house</h1>
        <button className='ml-44 text-2xl outline p-2 rounded-xl'>Make a friend</button>
    </div>
  )
}

export default Home