import './App.css';
import Todo from './components/Todo.jsx';

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <Todo />
      <div>
        <h2>Finish Frontend Simplified</h2>
        <button>Delete</button>
      </div>
      <div>
        <h2>Finish Interview Section</h2>
        <button>Delete</button>
      </div>
      <div>
        <h2>Land a 100K Job</h2>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default App;
   