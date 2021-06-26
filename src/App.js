import './App.css';
import Form from './Form';
import SearchDetail from './SearchDetail'

function App() {
  return (
      <div className="app">
        <center><h1>Enginnering Student Information</h1></center>
        <Form/>
        <center><h2>Student Details</h2></center>
        <SearchDetail/>
      </div>
  );
}

export default App;
