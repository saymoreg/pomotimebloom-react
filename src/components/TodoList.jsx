import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const handleUpdateTodo = (index, updatedText) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedText;
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (editingIndex !== null) {
        handleUpdateTodo(editingIndex, newTodo);
      } else {
        handleAddTodo();
      }
    }
  };

  const buttonStyle =
    "text-tertiary border p-1 px-4 rounded-md hover:text-primary hover:bg-tertiary";
  const inputStyle =
    "flex-grow border rounded p-2 focus:outline-none focus:border-primary";

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-tertiary text-2xl mb-4 text-center">TODO LIST</h2>
      <div className="flex space-x-2">
        <input
          className={inputStyle}
          type="text"
          placeholder={editingIndex !== null ? "Edit todo" : "Add a new todo"}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className={buttonStyle}
          onClick={
            editingIndex !== null
              ? () => handleUpdateTodo(editingIndex, newTodo)
              : handleAddTodo
          }
        >
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li
            className="flex justify-between items-center border-b py-2 last:border-b-0"
            key={index}
          >
            {editingIndex === index ? (
              <input
                className={inputStyle}
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleUpdateTodo(index, newTodo);
                  }
                }}
              />
            ) : (
              <span className="text-tertiary">{todo}</span>
            )}
            <div>
              {editingIndex === index ? (
                <button
                  className={buttonStyle}
                  onClick={() => handleUpdateTodo(index, newTodo)}
                >
                  Update
                </button>
              ) : (
                <>
                  <button
                    className={buttonStyle}
                    onClick={() => {
                      setNewTodo(todo);
                      setEditingIndex(index);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className={buttonStyle}
                    onClick={() => handleRemoveTodo(index)}
                  >
                    Remove
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
