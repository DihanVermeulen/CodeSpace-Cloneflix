import React, { useEffect, useState } from 'react';
import './Dropdown.css';
import isSignedIn from '../../utils/utils'

export const Dropdown = () => {
  const [signedIn, setsignedIn] = useState(false);

  useEffect(() => {
    // CHECKS ON THE LOCALSTORAGE TO SEE IF USER IS SIGNED IN AND SETS {signedIn} TO THAT VALUE 
    setsignedIn(isSignedIn());
  }, [])

  // SETS LOCALSTORAGE ITEM TO TRUE WHEN USER SIGNS IN
  const signIn = () => {
    console.log('Log In');
    localStorage.setItem('SignedIn', true);
    setsignedIn(true);
  }

  // SETS LOCALSTORAGE ITEM TO FALSE WHEN USER SIGNS OUT
  const signOut = () => {
    console.log('Log Out');
    localStorage.setItem('SignedIn', false);
    setsignedIn(false);
  }

  const DropdownItem = (props) => {
    return (
      <a href='#' className='dropdown-item' onClick={props.function}>
        {props.children}
      </a>
    )
  }

  // BASED ON IF THE USER IS SIGNED IN WHAT BUTTON WILL DISPLAY
  return (
    <div className='dropdown'>
      {!signedIn && <DropdownItem function={signIn}>Log In</DropdownItem>}
      {signedIn && <DropdownItem function={signOut}>Log Out</DropdownItem>}
    </div >
  )
}
