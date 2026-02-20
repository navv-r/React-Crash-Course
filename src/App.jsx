import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';
import React, { useState } from 'react';
import Counter from './components/Counter.jsx';

function App( ) {
  const [showModal, setShowModal] = useState(false) 
  
  function onTodoDelete() {
    setShowModal(true) 
  }

  function onModalCancel() {
    setShowModal(false)
  }
  
  return (
    <> 
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button onClick={() => setShowModal(true)}>Add Item</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified"/>
        <Todo onTodoDelete={onTodoDelete}  title="Learn React"/>
        <Todo onTodoDelete={onTodoDelete}  title="Land a $100K job"/>
      </div>
      {showModal && <Modal title="Confirm Delete?"/>}
    </>    
  );

  
}
 

export default App; 