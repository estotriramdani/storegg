import CheckoutConfirmation from '../components/organisms/CheckoutConfirmation';
import CheckoutDetail from '../components/organisms/CheckoutDetail';
import CheckoutHeader from '../components/organisms/CheckoutHeader';
import CheckoutItem from '../components/organisms/CheckoutItem';

function checkout() {
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

export default checkout;
