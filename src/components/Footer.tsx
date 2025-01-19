import * as React from "react";

const footerStyles = {
  padding: "1rem",
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center" as const,
};

const Footer: React.FC = () => {
  return (
    <footer style={footerStyles}>
      <p>&copy; {new Date().getFullYear()} EmporiumAks. All rights reserved.</p>
    </footer>
  );
};

export default Footer;