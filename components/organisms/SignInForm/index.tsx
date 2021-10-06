import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { setLogin } from '../../../services/auth';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function SignInForm() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleSubmit = async () => {
    if (data.email.length == 0 || data.password.length == 0) {
      toast.error('Form email dan password wajib diisi');
    }
    const response = await setLogin(data);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Login success');
      const { token } = response.data;
      const tokenBase64 = btoa(token);
      Cookies.set('token', tokenBase64, { expires: 7 });
      router.push('/');
    }
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">
        Masuk untuk melakukan proses top up
      </p>
      <div className="pt-50">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          placeholder="Enter your email address"
          value={data.email}
          onChange={(event) => setData({ ...data, email: event.target.value })}
        />
      </div>
      <div className="pt-30">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          placeholder="Your password"
          value={data.password}
          onChange={(event) =>
            setData({ ...data, password: event.target.value })
          }
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          type="button"
          onClick={handleSubmit}>
          Continue to Sign In
        </button>
        <Link href="/sign-up">
          <a
            className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
            role="button">
            Sign Up
          </a>
        </Link>
      </div>
    </>
  );
}
