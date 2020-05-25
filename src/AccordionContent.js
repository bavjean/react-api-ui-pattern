import React from "react";
import "./AccordionContent.css";

export default function AccordionContent(props) {
  console.log(props.brewery);
  return (
    <div className="content hide">
      <p>
        <span>Brewery type:</span> {props.brewery.brewery_type}
      </p>
      <p>
        <span>Phone:</span> {props.brewery.phone}
      </p>
      <p>
        <span>Address:</span> {props.brewery.street}, {props.brewery.city},{" "}
        {props.brewery.state}, {props.brewery.postal_code}
      </p>
      <p>
        <a
          href={props.brewery.website_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {props.brewery.website_url}{" "}
        </a>
      </p>
    </div>
  );
}
