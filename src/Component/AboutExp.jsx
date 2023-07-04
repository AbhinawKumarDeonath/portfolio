import React from 'react'

function AboutExp() {
    const Detail =[
        {
          experiance:"1+",
          topic:"YEAR OF EXPERIANCE"
        },
        {
          experiance:"5+",
          topic:"PROJECT COMPLETED"
        },
        
    
      ]
  return (
    <>
        {
            Detail.map((item,i)=>
            <div className="exp-div">
               <h1 className="name">{item.experiance}</h1>
               <h2 className="exp-topic">{item.topic}</h2>
            </div>
            )
        }
    </>
  )
}

export default AboutExp
