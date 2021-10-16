import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { Container } from "./styled";

const Layout = () => {
  return (
    <Container mw="375px" role="main">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default Layout;
