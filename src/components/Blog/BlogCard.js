import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = ({item : { id, date, category, title, cover, para, desc } }) => {
  return (
    <>
        <div className='items'>
            <div className='img'>
                <img src={cover} alt=''   style={{
            resizeMode: 'contain',
            height: 100,
            width: 200,
          }}/>
            </div>
            <div className='category flex_space'>
                <span>{date}</span>
                <span>{category}</span>
            </div>

            <div className='details'>
                <h3>{title}</h3>
                <p>{para}</p>
            </div>

            <Link to ={`/blogsingle/${id}`} className='blogItem-link'>
                Read More <i className='fa fa-long-arrow-alt-right'></i>
            </Link>
        </div>
    </>
  )
}

export default BlogCard