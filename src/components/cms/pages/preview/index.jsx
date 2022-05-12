import React from 'react'
import parse from 'html-react-parser';

const index = (initValue) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingTop: "10px",
        paddingBottom: "10px",
        boxShadow: "0 0 35px 0 #c5c5c526",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "inherit"
        }}
      >
        <h1>{initValue?.initValue?.title}</h1>
      </div>
      <div
        style={{
          display: "flex",
          padding: "10px 20px 10px 20px"
        }}
      >
        {parse(initValue?.initValue?.content)}
      </div>
    </div>
  )
}

export default index