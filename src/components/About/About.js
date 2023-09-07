import React from 'react'
import AboutCard from './AboutCard'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
const About = () => {
  return (
    <>  
        <HeadTitle/>
        <section className='about top'>
            <div className='container'>
                <AboutCard />
            </div>
        </section>

        <section className='features top'>
            <div className='container aboutCard flex_space'>
                <div className='row row1'>
                    <h1>Our <span>Features</span></h1>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <button className='secondary-btn'>
                    Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                </div>
                <div className='row image'>
                    <img src='https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' alt='' />
                    <div className='control-btn'>
                    <button className='prev'>
                        <i className='fas fa-play'></i>
                    </button>
                    </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default About