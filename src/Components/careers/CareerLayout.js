import React from 'react'
import { Outlet } from "react-router-dom";


function CareerLayout() {
  return (
    <div className='career-layout'>
        <h1>CareerLayout</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad, laudantium inventore quia ex quidem amet distinctio vero reprehenderit saepe et voluptates tenetur, quaerat odit iure qui labore quis pariatur?
        Dolorum sint aut nis</p>

        <main>
        <Outlet/>
        </main>
    </div>
  )
}

export default CareerLayout