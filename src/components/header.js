import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="heading">
                <h1>Gaming Quiz</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Sign Up</a></li>
                    <li><a href="/">Log in</a></li>
                </ul>            
            </nav>
            <div className="btn">
                <button type="button">Create a quiz</button>
            </div>


        </div>
    );

}
export default Header;
