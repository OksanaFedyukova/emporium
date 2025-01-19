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


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavMenu />
      <main style={pageStyles}>
        <h1 style={headingStyles}>
Contact us          <br />
        </h1>
      
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Contact- Head</title>;