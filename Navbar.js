import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import cart from "../cart.svg"
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                    <Link to='/'>
                       <img src={logo} alt="store" id="logo" className="navbar-brand ml-5" /> 
                    </Link>
                    <ul className="navbar-nav align-items-center">
                      <li>
                        <Link to="/" className="nav-link">Products</Link>
                      </li>
                    </ul>
                    <div className="nav-search ml-5">
                        <input className="navInput" type="text" name="search" />
                        <button className="navButton" type="submit"><i class="fa fa-search"></i></button>                    
                    </div>
                    <SigninContainer>
                         <div className="signin" onClick={()=>{ alert('alert'); }}>
                            <span className="signinfirst">Sign in</span>
                            <span className="signinsecound">Account & Points</span>
                         </div>
                    </SigninContainer>
                    <Link to='/cart' className="ml-auto">
                       <ButtonContainer>
                           <span>
                              <img src={cart} alt="store" id="cart" className="navbar-brand ml-4 mr-4" /> 
                           </span>
                        </ButtonContainer>  
                    </Link>
            </NavWrapper>
        )
    }
}

export const ButtonContainer = styled.button`
   background: transparent;
   cursor: pointer;
   border: none;
   &:hover {
       border: 1px solid #fff;
       border-radius: 4px;
   }
   &:focus{
       outline: none;
   }
   #cart{
    width: 40px;
    height: 40px;
    padding: 0;
    margin: 0;
}
   `;

   const SigninContainer = styled.span`
    color: #fff;
    margin-left: 40px;
    cursor: pointer;
    &:hover{
        background-color: #a61111;
        border-radius: 4px;
    }
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    font-family: "Open Sans",Arial,Helvetica,sans-serif;
    padding: 5px 15px;
    padding-bottom: 15px;
    .signinfirst{
        font-size: 13px;
    }
    .signinsecound{
        font-size: 13px;
        display: block;
        line-height: 10px;
        font-weight: bold;
    }

   `;

   const NavWrapper = styled.nav`
       background: var(--mainRed);
       .nav-link {
           color: var(--mainWhite) !important;
           fornt-size: 1.6rem;
           text-transform: capitalize;
       }
/*********************************** Navbar Start ***********************************/
.navInput{
  width: 600px;
  max-width: 500px;
  box-sizing: border-box;
  border: none;
  height: 35px;
  border-radius: 3px 0px 0px 3px;
  padding: 5px 10px;
  outline: none;
}
.navButton{
  padding: 5px 9px;
  padding-top: 6px;
  border: none;
  color: var(--lightBlue);
  border-radius: 0px 3px 3px 0px;
  outline: none;
}
.navButton:focus{
  outline:0;
}
.navButton:hover{
  color: var(--mainBlue);
}
#logo{
    width: 60px;
    height: 60px;
    padding: 0;
    margin: 0;
}
`;

   