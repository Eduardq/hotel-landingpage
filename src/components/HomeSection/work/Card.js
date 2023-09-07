import React from 'react'

const Card = (props) => {
  return (
    <div className='box'>
        <div className='img'>
            <img src = {props.cover} alt=''   style={{
            resizeMode: 'contain',
            height: 150,
            width: 250,
          }}/>
        </div>
        <div className='details'>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default Card