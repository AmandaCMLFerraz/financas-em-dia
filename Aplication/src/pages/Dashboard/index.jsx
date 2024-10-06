import Sidebar from '../../components/Sidebar';
import Cards from '../../components/Cards';
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart/Index';

function Dashboard() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 p-4"> {/* Espaço para os cards */}
        <Cards />
        <div className="flex flex-row justify-center mt-2">
          <div className='w-1/2'>
            <h3>Receitas</h3>
            <PieChart />
          </div>
          <div>
            <h3>Despesas</h3>
            <PieChart />
          </div>
        </div>
        <div>
          <h3>Histórico Anual</h3>
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
