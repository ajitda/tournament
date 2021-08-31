import Link from "next/link";
import { useState } from "react"
import Header from "../components/layout/header";
import { data } from "./faqdata";

export default function Faq() {
  const [statecheck, setStatecheck] = useState(true)
  function Active() {
    if (statecheck === false) {
      setStatecheck(true)
    }
    else {
      setStatecheck(false)
    }
  }
  const [Title] = useState([{
    head: 'General'
  }, {
    head: 'Tournament Eligibility'
  }, {
    head: 'Streaming & Scoring'
  }, {
    head: 'Prizes & Credits'
  }, {
    head: 'Cheat Prevention'
  }, {
    head: 'Refunds'
  }, {
    head: 'Stats'
  }])
  return (
    <>
      <div style={{ backgroundColor: '#6E63F3' }} className=''>
        <Header />
      </div>
      <div className="w-full flex md:flex-row sm:flex-col">
        <div className="md:w-4/12 p-6 sticky justify-center sm:w-full">
          <h1 className="mb-9 text-5xl text-left font-bold m-auto px-8" style={{ color: ' rgb(2, 2, 72)' }}>
            FAQ
          </h1>
          {
            Title && Title.map((index, key) => (
              <h1 className="my-9 text-2xl text-left font-bold m-auto px-8" key={key} style={{ color: ' rgb(2, 2, 72)' }}>
                <a href={`#${index.head}`}>{index.head}</a>

              </h1>
            ))
          }

        </div>
        <div className="w-4/6 sm:w-full sm:px-4">
          <h1 className="mb-9 text-5xl py-6 text-left font-bold m-auto" style={{ color: ' rgb(2, 2, 72)' }}>
            Have Any Questions?</h1>
          <h1 className="mb-5 text-2xl py-3 text-left font-bold m-auto w-full" style={{ color: ' rgb(2, 2, 72)' }} id='#General'>
            General
          </h1>
          {
            data && data.map((index, key) => (


              <div class="accordion flex flex-col items-center justify-center mb-10" key={index}>

                <div class="w-full rounded-sm border-2 border-indigo-900">
                  <input type="checkbox" name="panel" id={`panel${index+1}`} class="hidden" onClick={() => Active()} checked={statecheck} />
                  <div className="px-10 py-6" id="headingOne">
                    <label for={`panel${index+1}`} class="relative block text-white p-4  focus:outline-none font-bold text-2xl" style={{ color: 'rgb(227, 115, 74)' }}>{index.heading}</label>
                  </div>
                  <div class="accordion__content overflow-hidden bg-grey-lighter">

                    <p class="accordion__body p-4 border-b-0 px-24 font-medium text-lg py-6" id={`panel${index+1}`}>{index.des}</p>
                  </div>
                </div>




              </div>



            ))
          }
          <h1 className="mb-5 text-2xl py-3 text-left font-bold m-auto w-full" style={{ color: ' rgb(2, 2, 72)' }} id="Tournament Eligibility">
            Tournament Eligibility
          </h1>
          {
            data && data.map((index, key) => (
              <div class="accordion flex flex-col items-center justify-center mb-10" key={key}>

              <div class="w-full rounded-sm border-2 border-indigo-900">
                <input type="checkbox" name="panel" id={`panel-${key}`} class="hidden" onClick={() => Active()} checked={statecheck} />
                <div className="px-10 py-6" id="headingOne">
                  <label for={`panel-${key}`} class="relative block text-white p-4  focus:outline-none font-bold text-2xl" style={{ color: 'rgb(227, 115, 74)' }}>{index.heading}</label>
                </div>
                <div class="accordion__content overflow-hidden bg-grey-lighter">

                  <p class="accordion__body p-4 border-b-0 px-24 font-medium text-lg py-6" id={`panel-${key}`}>{index.des}</p>
                </div>
              </div>




            </div>



            ))
          }


        </div>

      </div>
    </>
  )
}
