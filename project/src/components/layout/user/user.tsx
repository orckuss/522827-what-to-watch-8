import { logout } from '@store/user/async-actions';
import { getAuthStatus, getUserInfo } from '@store/user/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'src/constants';

function User(): JSX.Element {
  const isAuthorized = useSelector(getAuthStatus);
  const user = useSelector(getUserInfo);

  const dispatch = useDispatch();

  return isAuthorized ?
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoutes.MyList}>
            <img
              src={user?.avatarUrl}
              alt="User avatar"
              width="63"
              height="63"
            />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <a
          href="/"
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logout());
          }}
        >
          Sign out
        </a>
      </li>
    </ul>
    :
    <div className="user-block">
      <Link
        to={AppRoutes.SignIn}
        className="user-block__link"
      >
        Sign in
      </Link>
    </div>;
}

export default User;
