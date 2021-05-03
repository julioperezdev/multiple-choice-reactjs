import React from "react"
import "./Header.css"


const Header = () =>{
    return(
        <div className="header-style">
            <a className="header-style-link" href="">Question Factory</a>
            <a className="header-style-link" href="">Show Questions</a>
            <a className="header-style-link" href="">Test type Factory</a>
            <a className="header-style-link" href="">Show Test type</a>
        </div>
    )
}

export default Header;