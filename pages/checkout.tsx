import CheckoutConfirmation from '../components/organisms/CheckoutConfirmation';
import CheckoutDetail from '../components/organisms/CheckoutDetail';
import CheckoutHeader from '../components/organisms/CheckoutHeader';
import CheckoutItem from '../components/organisms/CheckoutItem';
import { GetServerSideProps } from 'next';
import { JWTPayLoadTypes, UserInfoTypes } from '../services/data-types';
import jwtDecode from 'jwt-decode';

interface CheckoutProps {
  user: UserInfoTypes;
}

function checkout(props: CheckoutProps) {
  const { user } = props;
  console.log(user);
  return (
    <div>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <CheckoutHeader />
          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutConfirmation />
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const userInfo: JWTPayLoadTypes = jwtDecode(jwtToken);
  return {
    props: {
      user: userInfo.player,
    },
  };
};

export default checkout;
