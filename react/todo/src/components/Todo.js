import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {

  const [todos, setTodos] = useState([]); // Liste der Aufgaben
  const [input, setInput] = useState(""); // Eingabetext

  // Aufgabe hinzufügen
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };


  // Aufgabe löschen
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };


  // Aufgabe abschließen
  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };


  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>To-Do-Liste</h1>

      {/* Eingabefeld */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Neue Aufgabe hinzufügen..."
          style={{ padding: "8px", width: "300px", marginRight: "8px" }}
        />
        <button onClick={addTodo} style={{ padding: "8px 16px" }}>
          Hinzufügen
        </button>
      </div>

      {/* Tabelle */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Aufgabe</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Status</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              onDelete={deleteTodo}
              onToggle={toggleComplete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
