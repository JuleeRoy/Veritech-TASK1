import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/IMAGES/logo.png";
const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className="logo">
          <img src="https://icons.veryicon.com/png/o/business/oa-attendance-icon/company-27.png" />
          <p className="logo-text">Company</p>
        </div>
        <ul>
          <li>
          
            <NavLink to="/" activeclassname="active">
              <p> Home</p>
            <i className="fa-solid fa-house"></i>
             
            </NavLink>
          </li>

          <li>
          
            <NavLink to="/login" activeclassname="active">
            <p> Login</p>
            <i className="fa-solid fa-id-card-clip"></i>
             
            </NavLink>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  
width:100vw;

  nav{
  width:99%;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  height:10vh;
  padding:10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.brightlyOrange};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  margin-top:10px;

  .logo
  {
    display:flex;
    // border:1px solid;
    width:20%;
    cursor:pointer;
    align-items:center;
    justify-content:center;
    padding:0px 10px;

    img{
      width:2rem;
    }

    .logo-text{
      font-size:1.4rem;
      color:${({theme})=>theme.colors.brightlyOrange};
      // margin-top:10px;
      
    
    }
   }

   ul{
    display:flex;
    gap:5px;
    width:80%;
    justify-content: flex-end;

    li{
      padding:10px 15px;
      
      background-color:${({theme})=>theme.colors.brightlyOrange};
      border-radius:10px;
      a{
        font-size:1.2rem;
        color:white;
        display:flex;
        justify-content:center;

        .fa-solid{
          padding: 0px 10px;
          margin-top:2px;
          color:white;
        }

        p{
          color:white;
        }
      }

      
    }
   }
  
}

@media (max-width: 767px) {
 
  font-size: calc(${({ theme }) => theme.fonts.baseFontSize} * 0.9rem);

  nav{
    width:100%;
     


  .logo-text{
    display:none;
  }

  ul > li {
    background-color: white;
    padding:10px; 

    a{
      p{
        display: none;
      }

      .fa-solid {
        color: ${({ theme }) => theme.colors.brightlyOrange};
        padding: 0px;
      }
    }
    
   
  
  }
}
}



`;
export default Navbar;
