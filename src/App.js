import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.log(err));
  }, []);

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
            {messages.map((messageObj, index) => (
              <div key={index} className="bubble">
                {messageObj.message}
              </div>
            ))}
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
