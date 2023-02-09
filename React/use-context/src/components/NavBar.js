import React, { useContext } from "react";

import NavContext from "../state/NavContext";

// function NavBar() {
//   const { showNav, toggleNav } = useContext(NavContext);

//   return (
//     <div style={showNav}>
//       <button
//         onClick={() => {
//           console.log(showNav);
//           toggleNav();
//         }}
//       >
//         Navigation
//       </button>
//     </div>
//   );
// }

import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { showNav, toggleShowNav } = useContext(NavContext);
  console.log(children);
  console.log(eventKey);
  console.log(callback);
  //   const decoratedOnClick = useAccordionButton(eventKey, () => {
  //     toggleEventKey();
  //   });

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{
        backgroundColor: isCurrentEventKey ? "pink" : "lavender",
        backgroundImage: `url("../Hamburger_Icon.png")`,
      }}
      onClick={toggleShowNav}
      callback={() => showNav}
    >
      {children}
    </button>
  );
}

function NavBar() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse in={callback} eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
export default NavBar;
