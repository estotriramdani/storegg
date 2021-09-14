import SideBar from '../../../components/organisms/SideBar';
import TransactionContent from '../../../components/organisms/TransactionContent';

function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar active="transactions" />
      <TransactionContent />
    </section>
  );
}

export default Transactions;
