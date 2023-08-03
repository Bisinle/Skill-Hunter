import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdSwitchAccount  } from "react-icons/md"
import { dataContext } from '../../data/DataContextProvider'

function Faq() {
  const { faqData } = useContext(dataContext)

  const displayFaqData = faqData.map(({ title, questions}) => {
    const faqQuestions = questions.map((text) => {
      return (<Link to="#" className="block pb-1 underline text-sky-800">{text}</Link>)
    })

    return (
        <div className="question border p-3 rounded-lg border-gray-500">
          <MdSwitchAccount size={"3rem"} className="text-pink-700" />
          <p className="my-2 text-2xl font-medium hover:underline hover:cursor-pointer"><strong>{title}</strong></p>
            {faqQuestions}
        </div>
    )
  })

  return (
    <div className="faq">
    <h3 className="text-2xl text-center font-bold mb-4">Frequently Asked Question</h3>

    <div className="grid grid-cols-2 gap-4">
      {displayFaqData}
    </div>
  
  </div>
  )
}

export default Faq