import React, { Component } from "react";
import NavBarChild from './NavBarChild';
import css from './css/NavBarForm.module.css';

class NavBarForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true,
        }
    }
    handleButtonClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: this.state.isLoggedIn ? false: true
        }))
    }

    render() {
        return (
            <div className= {css.NavBar}>
                <h1>My Gallery</h1>
                <NavBarChild 
                loggedIn={this.state.isLoggedIn}
                handleClick={this.handleButtonClick}
                />
                   {/* {
                       this.state.isLoggedIn ?
                        <button onClick={this.handleButtonClick}>Log out</button>
                        :
                        
                            <form>
                            <input placeholder='username' />
                            
                            <input placeholder='password'/>
                            <button onClick={this.handleButtonClick}>login</button>
                            </form>
                        
                    }        */}
                
                       
            </div>
        )
    }
}

export default NavBarForm