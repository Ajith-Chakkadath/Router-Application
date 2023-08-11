import React from 'react'
import images from '../img/logo.png'
import './homestyle.css'

function Home() {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <img src={images}/>

            <h1>Ajith Chakkadath</h1>
            <h3>Blockchain Devloper</h3>
                <button>Download CV</button>
                <button>Contact me</button>
        </div>
    </section>
  
  )
}

export default Home