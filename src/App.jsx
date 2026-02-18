import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';

function App() {
  return (
    <>
      <Title />
      <div className="todo-wrapper">
        <Todo title="Finish Frontend Simplified"/>
        <Todo title="Learn React"/>
        <Todo title="Build a project"/>
      </div>
      {/* <Modal /> */}
    </>
  );
}

export default App;
   