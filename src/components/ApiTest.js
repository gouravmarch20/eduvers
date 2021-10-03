import React, { useState } from 'react'
import data from '../assets/data'
const apiTest = () => {
  // ! tested : onclick feature
  const handleDetails = details => {
    console.log(data[details])
    console.log(data[details][0]?.name)
    console.log(data[details][0]?.category)
    console.log(data[details][1]?.aboutManagement)
  }
  return (
    <div>
      <h1>view of create api </h1>
      {/* {console.log(data.apsDk[0].name)} */}
      {Object.keys(data).map(details => {
        return (
          <div key={details}>
            {console.log(typeof details)}
            <h1
              style={{ color: 'red ' }}
              onClick={() => handleDetails(details)}
            >
              {' '}
              {details}
            </h1>

            <p>-----</p>
          </div>
        )
      })}

      <hr />
    </div>
  )
}

export default apiTest
