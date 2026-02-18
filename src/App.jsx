import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';

function App() {
  return (
    <>
      <Title />
      <div className="todo-wrapper">
        <Todo 
          title="Finish Frontend Simplified"
          paragraph="Code along with Frontend Simplified step by step."
        />
        <Todo 
          title="Learn React"
          paragraph="Learn how to code with React and build amazing projects"
        />
        <Todo 
          title="Land a $100K job"
          paragraph="Learn all the skills required to land a 100K job as a frontend developer"
        />
      </div>
      <Modal
        title="Are you sure you want to delete this todo?"
      />
    </>
  );
}

export default App;
   