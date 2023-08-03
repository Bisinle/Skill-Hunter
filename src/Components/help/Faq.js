import React from 'react'
import { Link } from 'react-router-dom'

function Faq() {
  return (
    <div className="faq">
    <h3 className="text-2xl text-center font-bold mb-4">Frequently Asked Question</h3>

    <div className="grid grid-cols-2 gap-4">
      <div className="question border p-3">"block pb-1
"block pb-1
"block pb-1
"block pb-1
        <p className="mb-2 text-2xl font-medium"><strong>My Account</strong></p>
        <Link to="#" className="block pb-1 underline text-sky-800">How do I close account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">How do I reset my account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">I can't Sign in to My account</Link>
        <Link to="#" className="block pb-1 underline text-sky-800">How Do I Create an Indeed Account?</Link>
      </div>

      <div className="question">
        <p>
          <strong>My Account</strong>
        </p>
        <a href="#">How do I close account</a>
        <a href="#">How do I reset my account</a>
        <a href="#">I can't Sign in to My account</a>
        <a href="#">How Do I Create an Indeed Account?</a>
      </div>

      <div className="question">
        <p>
          <strong>My Account</strong>
        </p>
        <a href="#">How do I close account</a>
        <a href="#">How do I reset my account</a>
        <a href="#">I can't Sign in to My account</a>
        <a href="#">How Do I Create an Indeed Account?</a>
      </div>
    </div>
  
  </div>
  )
}

export default Faq