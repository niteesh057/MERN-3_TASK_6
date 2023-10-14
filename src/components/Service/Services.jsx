import React from "react";
import { FaDatabase, FaCss3, FaJsSquare, FaCode, FaHtml5, FaReact } from "react-icons/fa"; 
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">Skills</span>
        </h4>
        <h1>What I Know</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaCode}
            title={"Java"}
            disc={`Proficient in Java with a strong base in object-oriented principles.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaDatabase}
            title={"SQL"}
            disc={`Skilled in SQL for effective data management and database design.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaJsSquare}
            title={"JavaScript"}
            disc={`Experienced in creating dynamic and interactive web applications.`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={FaCss3}
            title={"CSS"}
            disc={`Proficient in crafting visually appealing and responsive web designs.`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={FaHtml5}
            title={"HTML"}
            disc={`Experienced in creating structured and semantically meaningful web content.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaReact}
            title={"React"}
            disc={`Specialized in developing interactive and responsive web application interfaces.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
