//Ett "regelbrott" är att skriva all kod i en o samma fil.
//Förbättring är att dela upp koden i flera filer för att öka läsbarheten.

// Man ska helst inte använda "client" i en fil som inte är en hook eller en komponent.
// Förbättring är att använda "useClient" i komponenter istället för huvud page.
"use client";

import React, { useState } from "react";

const TodoApp = () => {
  // Regelbrott: Använd mer beskrivande namn för att öka kodens läsbarhet.
  // Förbättring är att använda mer beskrivande namn för att öka kodens läsbarhet. Exempel: const [todos, setTodos] = useState<string[]>([]);
  const [a, b] = useState<string[]>([]);
  const [x, y] = useState<string>("");

  // Regelbrott: Använd mer beskrivande namn för att öka kodens läsbarhet.
  const handleAddTodo = () => {
    // Regelbrott: Använd en konstant för att definiera värdet.
    // Förbättring är att använda en konstant för att definiera värdet. Exempel: const trimmedValue = x.trim();
    if (x.trim() !== "") {
      b([...a, x]);
      y(""); // Regelbrott: Flertalet instruktioner per rad. Förbättring är att använda en instruktion per rad.
    }
  };

  // Regelbrott: Använd mer beskrivande namn för att öka kodens läsbarhet.
  // Förbättring är att använda mer beskrivande namn för att öka kodens läsbarhet. Exempel: const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { setTodoValue(e.target.value); };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    y(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <div className="flex">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 mr-2"
          value={x}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleAddTodo}
        >
          Add Todos
        </button>
      </div>
      <ul className="mt-4">
        {a.map((z, index) => (
          <li key={index} className="text-lg">
            {z}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
