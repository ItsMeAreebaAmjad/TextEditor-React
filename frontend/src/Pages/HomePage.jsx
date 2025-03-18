import React, { useState, useRef } from "react";
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaAlignLeft, FaAlignCenter, FaAlignRight, FaUndo, FaRedo, FaListUl, FaListOl, FaFont, FaHighlighter, FaEraser } from "react-icons/fa";

const Home = () => {
  const [content, setContent] = useState("");
  const editorRef = useRef(null);

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
      <h1 className="text-4xl font-extrabold mb-6 drop-shadow-lg">Advanced Text Editor</h1>
      <div className="bg-white shadow-xl rounded-lg w-full max-w-3xl p-6 text-gray-900">
        <div className="flex flex-wrap gap-3 mb-4 border-b pb-3 bg-gray-100 p-2 rounded-lg shadow-inner">
          <button onClick={() => execCommand("bold")} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"><FaBold /></button>
          <button onClick={() => execCommand("italic")} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"><FaItalic /></button>
          <button onClick={() => execCommand("underline")} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"><FaUnderline /></button>
          <button onClick={() => execCommand("strikethrough")} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"><FaStrikethrough /></button>
          <button onClick={() => execCommand("justifyLeft")} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"><FaAlignLeft /></button>
          <button onClick={() => execCommand("justifyCenter")} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"><FaAlignCenter /></button>
          <button onClick={() => execCommand("justifyRight")} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"><FaAlignRight /></button>
          <button onClick={() => execCommand("insertUnorderedList")} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"><FaListUl /></button>
          <button onClick={() => execCommand("insertOrderedList")} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"><FaListOl /></button>
          <button onClick={() => execCommand("foreColor", "blue")} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"><FaFont /></button>
          <button onClick={() => execCommand("backColor", "yellow")} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"><FaHighlighter /></button>
          <button onClick={() => execCommand("removeFormat")} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"><FaEraser /></button>
          <button onClick={() => execCommand("undo")} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"><FaUndo /></button>
          <button onClick={() => execCommand("redo")} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"><FaRedo /></button>
        </div>
        <div
          ref={editorRef}
          contentEditable
          className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 bg-gray-50 overflow-auto text-lg shadow-md"
          onInput={(e) => setContent(e.currentTarget.innerHTML)}
        ></div>
      </div>
    </div>
  );
};

export default Home;
