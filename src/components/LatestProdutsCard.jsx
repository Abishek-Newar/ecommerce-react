import React from 'react'

function LatestProdutsCard({item}){
  return (
    <div className='latest1'>
      <img src={item.image} alt="" />
      <h1>
        {item.title}
      </h1>
      <p>$ {item.price}</p>
      <button>Buy Now</button>
    </div>
  )
}

export default LatestProdutsCard
