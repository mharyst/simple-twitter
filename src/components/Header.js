import React from 'react'

const Header = ({ name }) => {
  return (
    <nav className="navbar navbar-full navbar-dark bg-primary" style={{marginBottom: '15px'}}>
      <div className="container">
        <a className="navbar-brand" href="#">Simple Twitter App</a>
        <span className="tag tag-info">v1.0.1</span>
      </div>
    </nav>
  )
}

export default Header