import React from "react";
import heroImage from "../images/books-2.jpg";

const headerStyle = {
  "backgroundImage": `url(${heroImage})`,
  "maxWidth": "100vw",
  height: "calc(100vw * .3)",
  "backgroundSize": "cover",
  position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Search Google Books</h1>
        </header>
    );
}

export default Header;