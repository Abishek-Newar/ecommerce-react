import React from 'react'
import Navbar from '../../components/Navbar'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../../../config'
import LatestProdutsCard from '../../components/LatestProdutsCard'

const MenSection = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        async function serverCall(){
            try {
                const res = await axios.get(`${BACKEND_URL}/products/getallproducts`)
                console.log(res.data.products)
                setData(res.data.products)
            } catch (error) {
                
            }
        }
        serverCall()
    },[])

  return (
    <>
    <Navbar />
    <div>
        {
            data.map((item,index)=>(
                <div key={index}>
                    {
                    item.category === "Men"?
                    <LatestProdutsCard item={item} />:
                    null
                }
                </div>
            ))
        }
    </div>
    </>
  )
}

export default MenSection