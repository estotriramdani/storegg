import OverviewContent from '../../components/organisms/OverviewContent';
import SideBar from '../../components/organisms/SideBar';

function Overview() {
  return (
    <section className="overview overflow-auto">
      <SideBar active="overview" />
      <OverviewContent />
    </section>
  );
}

export default Overview;
