import React from "react";
import styled from "styled-components";
import bgImage from "./AboutUs.avif"; 
import Menu from "../../components/Menu";

const AboutUsCtn = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.$bg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 50px;
  position: relative;
`;

const AboutUsTitle = styled.h1`
font-size: 70px;
margin-right: 200px;
color: white;
`;

const AboutUsText = styled.a`
font-size: 30px;
color: white;
max-width: 500px;
margin-right: 100px;
`;
const AboutUs = () => {
  return (




    <>   
    <Menu />
    
    
    
    
    
     <AboutUsCtn $bg={bgImage}>
        <AboutUsTitle>
            About Us
        </AboutUsTitle>
        <AboutUsText>
        At Manreka Accounting, our team of certified experts is dedicated to simplifying your accounting tasks. We make finance management easy, accessible, and tailored to your needs - so you can focus on what matters most.
        </AboutUsText>


    </AboutUsCtn>
    </>

  );
};

export default AboutUs;
