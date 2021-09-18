import React from "react"

function Login(props) {
  return (props.isVisible) ? (
      <form>
        Username:<input type="text" />
        Password:<input type="password" />
      </form>
  ) : '';
}


export default Login
