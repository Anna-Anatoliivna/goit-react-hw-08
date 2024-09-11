import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { Container } from "../Container/Container";


const Layout = ({ children }) => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </Container>
  );
};

export default Layout