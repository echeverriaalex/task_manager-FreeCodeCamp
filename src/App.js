import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="app-container">
      <div className='logo-container'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className='task-list'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;