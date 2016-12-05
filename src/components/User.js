import React from 'react'

const User = ({ name, handleLogin, signOut }) => {
  const loginReq = (el) => {
    el.preventDefault()
    const name = el.target.querySelector('input').value
    name.length > 0 ? handleLogin(name) : alert('Enter username, please')
  }

  const logOutReq = () => signOut()

  if (name) {
    return (
      <div className='container'>
        <div className="alert alert-success" role="alert">
          Hello, {name}.
          <button type="button" className="btn btn-sm btn-success sign-out" onClick={() => logOutReq()}>Sign out</button>
        </div>
      </div> 
    )
  } else {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h2>Sign In:</h2>
            <form className="login-form" onSubmit={loginReq.bind(this)}>
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="submit">Sign in</button>
                </span>
              </div>
            </form>
          </div> 
        </div> 
      </div> 
    )
  }
}

User.propTypes = {
  name: React.PropTypes.string.isRequired,
  handleLogin: React.PropTypes.func.isRequired,
  signOut: React.PropTypes.func.isRequired,
}

export default User
