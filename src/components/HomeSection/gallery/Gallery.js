import React from 'react'
import data from './data'
import './gallery.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Gallery = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <>
        <section className='collection'>
            <div className='container top'>
            <Slider {...settings}>
                {data.map((value) => {
                    return (
                        <div className='box'>
                            <img src={value.cover} alt='' />
                        </div>
                    )
                })}
            </Slider>
            </div>
        </section>    
    </>
  )
}

export default Gallery