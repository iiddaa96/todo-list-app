// All kod är skriven i en enda fil, vilket kan göra den svår att underhålla och förstå.
// Förbättring: Dela upp koden i flera filer för att öka läsbarheten och underhållbarheten, till exempel separera logik och komponenter i olika filer.

//  "client" används utanför en hook eller komponent, vilket kan bryta mot en konsekvent kodstruktur.
// Förbättring: Använd "useClient" i komponenter istället för att använda det direkt i huvudfilen.
"use client";

import React, { useState } from "react";

const TodoApp = () => {
  // Variabelnamnen a, b, x, y är inte beskrivande, vilket kan försvåra förståelsen av koden.
  // Förbättring: Använd mer beskrivande namn för att förbättra kodens läsbarhet och underhållbarhet.
  const [a, b] = useState<string[]>([]);
  const [x, y] = useState<string>("");

  const handleAddTodo = () => {
    //  Flera instruktioner skrivs på samma rad, vilket kan försvåra felsökning och underhåll.
    // Förbättring: Använd en instruktion per rad för att öka läsbarheten och underhållbarheten.
    if (x.trim() !== "") {
      b([...a, x]);
      y(""); // Regelbrott: Variabelnamnet "y" är inte beskrivande och kan förvirra andra utvecklare.
      // Förbättring: Använd ett mer beskrivande namn för att öka förståelsen av variabeln.
    }
  };

  // Samma igen här, funktionen använder variabeln "y" som inte är beskrivande för dess syfte.
  // Förbättring: Använd ett mer beskrivande namn för funktionen för att öka förståelsen av dess syfte.
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
