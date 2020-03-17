/** @jsx jsx */
import React, { useState } from 'react';
import{
    NavLink
} from 'react-router-dom';
import { jsx, css } from '@emotion/core';


function NavLonk(props){
    return(
    <NavLink active={props.active} exact to={props.to}      
            css={css`
              color: ${props.active ? '#66c0f4' : '#c7d5e0'};
              padding: 20px;
              background-color: #171a21;
              font-size: 24px;
              border-radius: 1px;
              text-decoration-line: none;
              display: inline-block;
              float: ${props.text == "Yasaw" ? 'left' : 'none'};         
              &:hover{
                background-color: #2a475e;
              }
              `}
          >{props.text}</NavLink>
    );
  }
  
  function Navbar(props) {
    let [isOpen, setOpen] = useState(0);
  
    const menu = css`
      display: none;
      @media (max-width: 768px) {
        position: absolute;
        float: left;
        background-color: pink;
        z-index: 99;
        width: 20%;
        height: 10%;
        margin: 0 0 0 -250px;
        display: ${isOpen ? 'inherit' : 'none'};
        transition: margin .5s;
        margin-left: ${isOpen ? '0' : '-250px'};
  
      }
    `
    const link = css`
      vertical-align: middle;
      z-index: 99;
    `
  
    const button = css`
      float: right;
    `
    isOpen = false;
    return (
      <div>
        <nav
          css={css`
            border: #2a475e 5px solid;
            background-color: #171a21;
            font-size: 24px;
            text-align: center; 
          `}
          >
          <NavLonk text="Yasaw" to={"/"} />
          <NavLonk text="User" to={`/user/${props.id}`} active={props.active == "user" ? true : false}/>
          <NavLonk text="Friends" to={`/user/friends/${props.id}`} active={props.active == "friends" ? true : false}/>
          <NavLonk text="Games" to={`/user/games/${props.id}`} active={props.active == "games" ? true : false}/>
{/*           <NavLonk text="Achievements" to={`/user/achievements/${props.id}`} active={props.active == "achieve" ? true : false}/> */}
          
        </nav>
      </div>
    );
  }
  
  export default Navbar;