// Det rekommenderas att dela upp koden i flera filer för att hålla koden ren och lättläst. Inte ha allt i en o samma fil

// Regelbrott: Du använder "use client" i en fil som inte är en hook eller en komponent. Ska också användas i en fil som är en hook eller en komponent.
//Förbättring: Ta bort "use client" då det inte behövs här och kan vara förvirrande.
"use client";
import React, { useState } from "react";

const TodoApp = () => {
  // Regelbrott: Deklaration av flera variabler på en rad.
  // Förbättring: Deklarera varje variabel på en egen rad för bättre läsbarhet.
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = () => {
    // Bryter mot regeln att inte ha magiska värden direkt i koden.
    // Förbättring: Använd en tydlig konstant för att undvika magiska värden.
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue(""); // Bryter mot regeln att ha flera instruktioner per rad.
    }
  };

  // Bryter mot regeln att inte använda korta och otydliga namn för funktioner.
  // Förbättring: Använd mer beskrivande namn för funktioner för bättre förståelse.
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
