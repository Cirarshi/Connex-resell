import React from "react";

export function Footer() {
  return (
    <footer className="footer">
      Created with ❤️ by Connex and currently it's{" "}
      {new Date().toLocaleTimeString()}
    </footer>
  );
  // return React.createElement("footer", null, "Created with ❤️ by Connex");
}
