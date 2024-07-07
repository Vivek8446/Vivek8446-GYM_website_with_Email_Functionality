import React from 'react'
import {Check} from 'lucide-react'
import { Link } from 'react-router-dom'
function Pricing() {
  const pricing = [
    {
      imgUrl: "/therock5.jpg",
      title: "Starter",
      price: "₹1000/month",
      length: 3
    },
    {
      imgUrl: "/therock8.jpg",
      title: "HEAL_YEARLY",
      price: "₹799/month",
      length: 6
    },
    {
      imgUrl: "/therock10.jpg",
      title: "YEARLY",
      price: "₹599/month",
      length: 12
    },
  ]
  return (
    <>
      <section className=' bg-slate-900  pricing '>
        <h1 className='text-white'>TEREMANA FITNESS </h1>
        <div className="wrapper">
          {pricing.map((item, index) => (
            <div key={index} className="card">
              <img src={item.imgUrl} alt="" />
              <div className="title">
                <h1>{item.title}</h1>
                <h1>PACKAGE</h1>
                <h3>{item.price}</h3>
                <p className=''>For {item.length} Months</p>
              </div>
              <div className="description ">
                <p>
                  <Check/> Equipment
                </p>
                <p>
                  <Check/> All
                </p>
                <p>
                  <Check/> Free
                </p>
                <p>
                  <Check/> 24/7
                </p>
                <p>
                  <Check/> 20 Days
                </p>
                <button to="to" className='bg-slate-900 text-white p-2 rounded-lg duration-100 hover:bg-slate-800'>Join Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Pricing