import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container py-5">
      <header className="mb-4">
        <h1 className="display-5">OctoFit Tracker</h1>
        <p className="lead">Modern multi-tier workout, team, and leaderboard tracker.</p>
      </header>

      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Welcome</h2>
          <p className="card-text">
            This frontend is built with React 19, Vite, Bootstrap, and React Router.
          </p>
          <button className="btn btn-primary" onClick={() => setCount((value) => value + 1)}>
            Click count: {count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
