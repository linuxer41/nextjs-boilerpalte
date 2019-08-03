import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Container from "../container/container";

function Layout({ path, children, pageTitle, ogImage }) {
  return (
    <Container>
      <Header path={path} pageTitle={pageTitle} ogImage={ogImage} />

      <main>{children}</main>

      <Footer />
      <style jsx>{`
      main{
        display: block;
      }      
      `}</style>
    </Container>
  );
}

export default Layout;