import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";


const UserMenu = () => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>Hellow, {user.name}!</p>
      <p>Email: {user.email}</p>
      <button type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
}

export default UserMenu