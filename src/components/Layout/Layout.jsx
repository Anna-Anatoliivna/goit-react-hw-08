// import { useDispatch } from "react-redux";
// import { logout } from "../../redux/auth/operations";
import AppBar from "../AppBar/AppBar";
import { Container } from "../Container/Container";


const Layout = () => {
  // const dispatch = useDispatch();
  // const onLogout = () => {
  //   dispatch(logout());
  // };
  return (
    <Container>
      <AppBar />
    </Container>
  );
}

export default Layout