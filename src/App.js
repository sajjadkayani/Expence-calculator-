import { useState } from 'react';
import './App.css';
import Expences from './Components/Expences';
import NewExpence from './Components/newExpence/NewExpence';
const dummyexpences = [
  {
    id : 1,
    title: 'car insurance ',
    amount: 2900,
    date: new Date(2021, 3, 28)
  },
  {
    id: 2,
    title: 'tv ',
    amount: 200,
    date: new Date(2021, 6, 28)
  },
  {
    id: 3,
    title: 'waterBills ',
    amount: 290,
    date: new Date(2021, 12, 28)
  }
]; 
const App = () => {
  const [expences, setexpences] = useState(dummyexpences)

  const addExpencehandler = (expense) => {
    setexpences((pervExpences) => {
      return [expense , ...pervExpences]
    });
  };

  return (
    <div className="App">
      <NewExpence onAddExpence={addExpencehandler} />
      <Expences items={expences} />
    </div>
  );
}

export default App;
