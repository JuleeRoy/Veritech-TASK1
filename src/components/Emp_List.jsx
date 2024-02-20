import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import useEmployeesData from "../redux/customHook/useEmployeesData";
import { NavLink } from "react-router-dom";

const Emp_List = () => {
  const employeesData = useEmployeesData();
  const employees = useSelector((state) => state.employees.employees);
    console.log(employeesData)
  console.log(employees);
  return (
    <Wrapper>
      <div>
        <h2 className="header">Our Employees List</h2>
        <ul>
          {employees.map((curElm, index) => {
            console.log(curElm)
            return (
              <NavLink to={`/employee/${curElm.id}`}  key={curElm.id}>

                <li key={curElm.id}>
                  <figure>
                    <img src={curElm.profileImage} alt="1" />
                  </figure>
                  <p>{curElm.name}</p>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  height:auto;
  
  width: 30%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  font-size: calc(${({ theme }) => theme.fonts.baseFontSize} * 1rem);

  div {
    text-align: center;
    height:inherit;
  }

  h2 {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    text-align: center;
    border-radius: 10px 10px 0px 0px;
    padding: 18px 10px;
    font-size: 1.5rem;
    
  }

  ul {
    padding: 0px 10px;
    max-height:400px;
    overflow:auto;
    
   

    li {
      display: flex;
      padding: 5px 7px;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      border-bottom: 1px solid gainsboro;

      p {
        text-align: justify;
        display: inline-block;
        width:75%;
        margin-top: 10px;
      }

      figure {
        width: 20%;

        img {
          width: 45px;
          border: 1px solid #ddd;
          object-fit: cover;
          padding: 5px;
          border-radius: 100%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 50%;
    font-size: calc(${({ theme }) => theme.fonts.baseFontSize} * 0.9rem);
  }

  @media (max-width: 480px) {
    width: 80%;
    ul{
      max-height:300px;
    }
  }

  
`;

export default Emp_List;
