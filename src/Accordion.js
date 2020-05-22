import React from "react";
import AccordionContent from "./AccordionContent";
import "./Accordion.css";

function Accordion(props) {
//   console.log(props)
  return (
    <div>
      <button onClick={props.toggle}>{props.brewery.name}</button>
      <AccordionContent brewery={props.brewery} />
    </div>
  );
}

export default Accordion;
