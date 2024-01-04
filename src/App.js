import './App.css';
import DataFetch from './components/DataFetch';
import DataModul from './components/DataModul';
import DataProps from './components/DataProps';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      {/* <Promise /> */}
      <DataFetch />
      <DataProps />
      <DataModul />
    </>
  );
}

export default App;
