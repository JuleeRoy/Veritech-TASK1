import React from 'react';
import styled from 'styled-components';
import bannerImage from '../assets/IMAGES/banner.png';
import Emp_List from '../components/Emp_List';
const Homepage = () => {
  return (
    <Wrapper>
        <section>
        <Emp_List/>
        </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
  background-image:url(${bannerImage});
  
  background-size: cover;
  background-position: center;
  height: 90vh; ;
  width:100vw;

  section{
    width:100%;
    display: grid;
    place-items: center;
    height:inherit;

  }
 
`;

export default Homepage;
