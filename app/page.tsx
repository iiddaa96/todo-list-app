"use client"; // Man ska helst inte använda "client" i en fil som inte är en hook eller en komponent.
import React, { useState } from "react";

const TodoApp = () => {
  // Bryter mot regeln att deklarera flera variabler på en rad.
  const [todos, setTodos] = useState<string[]>([]);

  // Bryter mot regeln att använda korta namn för variabler.
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = () => {
    // Bryter mot regeln att inte ha magiska värden direkt i koden.
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue(""); // Bryter mot regeln att ha flera instruktioner per rad.
    }
  };

  // Bryter mot regeln att inte använda korta och otydliga namn för funktioner.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">My Todo App</h1>
      <div className="flex">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 mr-2"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index} className="text-lg">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
