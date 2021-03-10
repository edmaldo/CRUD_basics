import React from "react"
import { Link } from "react-router-dom"
import GoogleAuth from "./GoogleAuth"

const Header = () => {
  return (
    <div className="ui secondary pointing menu" style={{ fontSize: "1.2rem" }}>
      <Link to="/" className="item">
        Live Video App
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  )
}

export default Header
