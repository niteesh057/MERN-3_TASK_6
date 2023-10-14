import React from 'react';
import Project from './Project';
import styled from 'styled-components';

let data = [
    {
        img : "https://res.cloudinary.com/dwficcf7f/image/upload/v1697280075/Screenshot_2023-10-14_160952_lk4ljy.png",
        disc : "I designed and developed a user-friendly online banking platform to enhance customer experiences and streamline financial transactions."
    },
    {
        img : "https://res.cloudinary.com/dwficcf7f/image/upload/v1697280261/JPDL20-Bird-Species-Identification-Using-Deep-Learning_pomtbc.jpg",
        disc : "I applied deep learning techniques to create a bird species classification system, helping to identify and categorize various bird species from images."
    },
    {
        img : "https://res.cloudinary.com/dwficcf7f/image/upload/v1697280389/Screenshot_2023-10-14_161604_vbwtmq.png",
        disc : "I designed and built my portfolio website to showcase my skills, experiences, and projects in an engaging and user-friendly manner."
    },
];

const SliderComp = () => {
    return (
        <Container>
            <CardContainer>
                {data.map((item, i) => (
                    <Project item={item} key={i} />
                ))}
            </CardContainer>
        </Container>
    );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
`;
