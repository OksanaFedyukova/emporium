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
          Congratulations
          <br />
          <span style={headingAccentStyles}>— Wellcome to EmporiumAks shop! 🎉🎉🎉</span>
        </h1>
        <p style={paragraphStyles}>
          Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this page
          update in real-time. 😎
        </p>
        <img
          alt="emporium"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Wellcome</title>;