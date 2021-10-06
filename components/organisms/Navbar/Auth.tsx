import Link from 'next/link';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { JWTPayLoadTypes } from '../../../services/data-types';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const Auth = () => {
  const [user, setUser] = useState({
    id: '',
    avatar: '',
    email: '',
    phoneNumber: '',
    username: '',
  });
  const [isLogin, setIsLogin] = useState(false);
  const IMG = process.env.NEXT_PUBLIC_IMG;
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const userInfo: JWTPayLoadTypes = jwtDecode(jwtToken);
      setIsLogin(true);
      setUser(userInfo.player);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove('token');
    toast.success('Logout berhasil', { autoClose: 3000 });
    setIsLogin(false);
    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  if (isLogin) {
    return (
      <>
        <li className="nav-item my-auto dropdown d-flex">
          <div className="vertical-line d-lg-block d-none"></div>
          <div>
            <a
              className="dropdown-toggle ms-lg-40"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <img
                src={IMG + '/' + user.avatar}
                className="rounded-circle"
                width="40"
                height="40"
                alt=""
              />
            </a>
            <ul
              className="dropdown-menu border-0"
              aria-labelledby="dropdownMenuLink">
              <li>
                <Link href="/member">
                  <a className="dropdown-item text-lg color-palette-2">
                    My Profile
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item text-lg color-palette-2">
                    Wallet
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/member/edit-profile">
                  <a className="dropdown-item text-lg color-palette-2">
                    Account Settings
                  </a>
                </Link>
              </li>
              <li>
                <a
                  className="dropdown-item text-lg color-palette-2"
                  onClick={onLogout}>
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </li>
      </>
    );
  }
  return (
    <>
      <li className="nav-item my-auto">
        <Link href="/sign-in">
          <a
            className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
            role="button">
            Sign In
          </a>
        </Link>
      </li>
    </>
  );
};

export default Auth;
