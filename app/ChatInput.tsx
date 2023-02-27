"use client";
import React, { useState } from "react";

function ChatInput() {
  const [input, setInput] = useState("");

  const addMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input ) return;

    const messageToSend = input;

    setInput("");
  };

  return (
    <form
      onSubmit={addMessage}
      className="fixe bottom-0 x-50 w-full flex px-10 py-5 space-x-2"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter message here..."
        className="
      flex-1 rounded border border-gray-300 focus:outline-none
      focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5
      py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
