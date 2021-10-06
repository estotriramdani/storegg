import { useState } from 'react';
import { toast } from 'react-toastify';

export default function CheckoutConfirmation() {
  const [checkBox, setCheckBox] = useState(false);
  const onSubmit = () => {
    const dataItem = JSON.parse(localStorage.getItem('data_item')!);
    const dataTopUp = JSON.parse(localStorage.getItem('data_topup')!);
    if (!checkBox) {
      toast.error('Pastikan Anda telah melakukan pembayaran');
    }
    const data = {
      voucher: dataItem.detail._id,
      nominal: dataTopUp.nominalItem._id,
      payment: dataTopUp.paymentItem.payment._id,
      bank: dataTopUp.paymentItem.bank._id,
      name: dataTopUp.bankAccountName,
      accountUser: dataTopUp.verifyID,
    };
    console.log(data);
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkBox}
          onChange={() => setCheckBox(!checkBox)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          role="button"
          onClick={onSubmit}>
          Confirm Payment
        </button>
      </div>
    </>
  );
}
