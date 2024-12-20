import React from "react";

const TodoItem = ({ index, todo, onDelete, onToggle }) => {
  return (
    <tr>
      
      {/* Aufgabe */}
      <td style={{ border: "1px solid #ddd", padding: "10px" }}>
        <span
          onClick={() => onToggle(index)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {todo.text}
        </span>
      </td>

      {/* Status */}
      <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
        {todo.completed ? "✅ Erledigt" : "❌ Offen"}
      </td>

      {/* Aktionen */}
      <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>

        {/* Status ändern */}
        <button
          onClick={() => onToggle(index)}
          style={{
            backgroundColor: todo.completed ? "green" : "orange",
            color: "white",
            border: "none",
            padding: "5px 10px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          {todo.completed ? "Als Offen markieren" : "Als Erledigt markieren"}
        </button>

        {/* Löschen */}
        <button
          onClick={() => onDelete(index)}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          Löschen
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;

