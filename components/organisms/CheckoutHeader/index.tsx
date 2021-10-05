import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutHeader() {
  return (
    <>
      <div className="logo text-md-center text-start pb-50">
        <Link href="/">
          <a className="">
            <Image src="/icon/logo.svg" width={60} height={60} alt="" />
          </a>
        </Link>
      </div>
      <div className="title-text pt-md-50 pt-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
        <p className="text-lg color-palette-1 mb-0">
          Waktunya meningkatkan cara bermain
        </p>
      </div>
    </>
  );
}
