import React from 'react'
import './About.css'
const AboutCard = () => {
  return (
    <>
        <div className='aboutCard mtop flex_space'>
            <div className='row row1'>
                <h4>About Us</h4>
                <h1>We <span>provide Solution</span> to grow your business</h1>
                <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
            </div>
            <div className='row image'>
                    <img src='https://plus.unsplash.com/premium_photo-1661771773771-a093c948ba92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGhhbmRzaGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60' alt='' />
                    <div className='control-btn'>
                    <button className='prev'>
                        <i className='fas fa-play'></i>
                    </button>
                    </div>
            </div>
        </div>
    </>
  )
}

export default AboutCard