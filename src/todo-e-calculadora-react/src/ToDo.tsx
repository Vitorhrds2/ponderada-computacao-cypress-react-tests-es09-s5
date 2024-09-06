import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput(''); // Limpa o campo de input
    }
  };

  return (
    <div id="todos-example">
      <input 
        id="new-todo" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
