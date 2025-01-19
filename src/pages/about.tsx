import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavMenu />
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          About Us
          <br />
          <span style={headingAccentStyles}>— Wellcome to EmporiumAks shop! 🎉🎉🎉</span>
        </h1>
      
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>About</title>;