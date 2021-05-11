import React from 'react';

const NavBarChild = (props) => {
    return (
        props.loggedIn ?
        <button onClick={props.handleClick}>Log out</button>
        :
        <form>
        <input placeholder='username' />
        
        <input placeholder='password'/>
        <button onClick={props.handleClick}>login</button>
        </form>
    )
}

export default NavBarChild