import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{
        backgroundColor: "pink",
        backgroundImage: `url("../Hamburger_Icon.png")`,
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function HamburgerIcon() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">
            {<img src="../Hamburger_Icon.png"></img>}
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default HamburgerIcon;
