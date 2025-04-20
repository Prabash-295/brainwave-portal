import React, { useState, useEffect } from "react";
import "./index.css";

function Login({ onLogin }) {
  const handleLogin = () => {
    onLogin("student@example.com");
  };

  return (
    <div className="container">
      <h2>Login to Cloud-Mind Portal</h2>
      <button onClick={handleLogin}>Login as Student</button>
    </div>
  );
}

function LearningModule({ focus }) {
  let content;

  if (focus > 75) {
    content = <p>📘 Advanced Lessons: Neural Networks, Brain Interfaces</p>;
  } else if (focus < 40) {
    content = <p>🧩 Mini Quiz or Relaxation Videos</p>;
  } else {
    content = <p>📗 Regular Lessons: Cloud Basics, Web Dev</p>;
  }

  return (
    <div className="module">
      <h3>Learning Module</h3>
      {content}
    </div>
  );
}

function Dashboard({ user }) {
  const [focus, setFocus] = useState(50);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (focus > 75) setStatus("Advanced Content Unlocked 🔓");
    else if (focus < 40) setStatus("Take a Short Break ☕");
    else setStatus("Normal Lessons Ongoing 📘");
  }, [focus]);

  return (
    <div className="container">
      <h2>Welcome, {user}</h2>
      <h3>Focus Level: {focus}%</h3>
      <input
        type="range"
        min="0"
        max="100"
        value={focus}
        onChange={(e) => setFocus(Number(e.target.value))}
      />
      <p>{status}</p>
      <LearningModule focus={focus} />
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  return <div>{!user ? <Login onLogin={setUser} /> : <Dashboard user={user} />}</div>;
}

export default App;
