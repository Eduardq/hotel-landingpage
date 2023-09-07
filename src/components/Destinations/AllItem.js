import React, { useState } from 'react'
import Dcard from './Dcard'
import Sdata from './Sdata'
import '../HomeSection/popular/MostPopular.css'

const AllItem = () => {
    const [items,setItem] = useState (Sdata)
  return (
    <>
        <section className='gallery desi mtop'>
            <div className='container'>
                <div className='content grid4'>
                    {
                        items.map((item) =>{
                            return <Dcard key={item.id} item={item}/>
                        })
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default AllItem