import React from 'react'
import { Link } from 'react-router-dom'
import { MdSwitchAccount  } from "react-icons/md"

function Faq() {
  return (
    <div className="faq">
    <h3 className="text-2xl text-center font-bold mb-4">Frequently Asked Question</h3>

    <div className="grid grid-cols-2 gap-4">
      <div className="question border p-3 rounded-lg border-gray-500">
        <MdSwitchAccount size={"3rem"} className="text-pink-700" />
        <p className="my-2 text-2xl font-medium hover:underline hover:cursor-pointer"><strong>My Account</strong></p>
        <Link to="#" className="block pb-1 underline text-sky-800">How do I close account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">How do I reset my account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">I can't Sign in to My account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">How Do I Create an Indeed Account?</Link>
      </div>

      <div className="question border p-3 rounded-lg border-gray-500">
        <MdSwitchAccount size={"3rem"} className="text-pink-700" />
        <p className="my-2 text-2xl font-medium hover:underline hover:cursor-pointer"><strong>Job Alerts</strong></p>
        <Link to="#" className="block pb-1 underline text-sky-800">How do I close account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">How do I reset my account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">I can't Sign in to My account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">How Do I Create an Indeed Account?</Link>
      </div>

      <div className="question border p-3 rounded-lg border-gray-500">
        <MdSwitchAccount size={"3rem"} className="text-pink-700" />
        <p className="my-2 text-2xl font-medium hover:underline hover:cursor-pointer"><strong>Job Search </strong></p>
        <Link to="#" className="block pb-1 underline text-sky-800">How do I close account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">How do I reset my account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">I can't Sign in to My account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">How Do I Create an Indeed Account?</Link>
      </div>

      <div className="question border p-3 rounded-lg border-gray-500">
        <MdSwitchAccount size={"3rem"} className="text-pink-700" />
        <p className="my-2 text-2xl font-medium hover:underline hover:cursor-pointer"><strong>My Account</strong></p>
        <Link to="#" className="block pb-1 underline text-sky-800">How do I close account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">How do I reset my account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">I can't Sign in to My account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">How Do I Create an Indeed Account?</Link>
      </div>
    </div>
  
  </div>
  )
}

export default Faq