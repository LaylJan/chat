import "./App.css";
import React, { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="App">
      <div className="Users">
        <div className="names">
          <h2>Users</h2>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div className="Messages">
          <div className="chats">
            <h2>messages</h2>
          </div>
        </div>
        <div className="Text" style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
            style={{ flex: 1, padding: "10px", marginRight: "10px" }}
          />
          <button onClick={handleSendMessage} style={{ padding: "10px 20px" }}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
