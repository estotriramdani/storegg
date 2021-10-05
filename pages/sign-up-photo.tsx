import { useEffect, useCallback, useState } from 'react';
import { getGameCategory } from '../services/player';
import { GameCategoryTypes } from '../services/data-types';
import { setSignUp } from '../services/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';

function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState('');
  const [image, setImage] = useState('');
  const [imgPreview, setImgPreview] = useState('/icon/upload.svg');
  const [localForm, setLocalForm] = useState({
    name: '',
    email: '',
  });
  const router = useRouter();

  const getGameCategoryAPI = useCallback(async () => {
    const data = await getGameCategory();
    setCategories(data);
    setFavorite(data[0]._id);
  }, []);
  useEffect(() => {
    getGameCategoryAPI();
  }, []);
  useEffect(() => {
    const getLocalForm = JSON.parse(localStorage.getItem('user_info') || '');
    setLocalForm(getLocalForm);
  }, []);
  const onSubmit = async () => {
    const form = await JSON.parse(localStorage.getItem('user_info') || '');
    console.log(form);
    const formData = new FormData();
    formData.append('image', image);
    formData.append('email', form.email);
    formData.append('password', form.password);
    formData.append('phoneNumber', '08123456789');
    formData.append('username', form.name);
    formData.append('name', form.name);
    formData.append('role', 'user');
    formData.append('status', 'Y');
    formData.append('favorite', favorite);
    const data = await setSignUp(formData);
    if (data.error) {
      toast.error(data?.message);
    } else {
      toast.success('Register berhasil');
      router.push('/sign-up-success');
      localStorage.removeItem('user_form');
    }
  };
  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    <img
                      src={imgPreview}
                      className="img-preview"
                      alt="upload photo"
                    />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      if (e.target.files) {
                        const img = e.target.files[0];
                        setImgPreview(URL.createObjectURL(img));
                        return setImage(img);
                      }
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                {localForm.name}
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                {localForm.email}
              </p>
              <div className="pt-50 pb-50">
                <label
                  htmlFor="category"
                  className="form-label text-lg fw-medium color-palette-1 mb-10">
                  Favorite Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  onChange={(e) => setFavorite(e.target.value)}>
                  {categories.map((category: GameCategoryTypes) => {
                    return (
                      <option value={category._id} key={category._id} selected>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                onClick={onSubmit}
                type="button">
                Create My Account
              </button>
              <a
                className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                href="#"
                role="button">
                Terms & Conditions
              </a>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

export default SignUpPhoto;
