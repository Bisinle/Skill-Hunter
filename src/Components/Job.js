import React, { useContext } from 'react'
import { dataContext } from '../data/DataContextProvider'

function Job() {
  const value = useContext(dataContext)
  console.log(value)

  return (
    <div className="flex justify-center">
      <div className="border p-6 max-w-2xl rounded-lg space-y-5">
          <div>
              <h4 className="hover:underline font-bold text-xl">Picker / Packer</h4>
              <p className="text-lg">NoGigiddy</p>
              <p className="text-lg">Houston, TX</p>
          </div>

          <div>
              <span className="bg-gray-300 mr-3 p-2 rounded-md">$1900</span>
              <span className="bg-gray-300 mr-3 p-2 rounded-md">Full-Time</span>
          </div>

          <div>
              <p className="font-light mt-8">Acts Conscientiously: Demonstrates concern for quality, product integrity, and safety of one’s own and others’ work and impact to the stores.</p>
          </div>
      </div>
    </div>
  )
}

export default Job
