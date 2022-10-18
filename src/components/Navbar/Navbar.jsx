import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <h1>{props.que}</h1>
    </div>
  )
}

export default Navbar