import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [users, setUsers] = useState("");
  const [name, setName] = useState("Lyle");
  const messagesEndRef = useRef(null);

  // For Back-end

  useEffect(() => {
    fetch("http://localhost:3000/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSendMessage = () => {
    console.log("=========================");

    if (newMessage.trim()) {
      const messageToSend = { name: name, message: newMessage };

      fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageToSend),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setMessages([...messages, messageToSend]);
            setNewMessage(""); // Clear the input field after sending
          }
        })
        .catch((err) => console.log(err));
    }
  };

  //For Front-end
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  return (
    <div className="App">
      <div className="Users">
        <div className="names">
          <h2>Users</h2>
          {Array.isArray(users) &&
            users.map((user, index) => (
              <h2
                key={index}
                className="Usernames"
                onClick={() => setName(user.name)}
              >
                {user.name}
              </h2>
            ))}
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div className="Messages">
          <div className="chats">
            {messages.map((messageObj, index) => (
              <div key={index} className="message-container">
                <div className="name">{messageObj.name}</div>
                <div className="bubble">{messageObj.message}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="Text" style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
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
