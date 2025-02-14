import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have a CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Job Application Portal</h1>
        <p>Your gateway to a better career</p>
      </header>
      <main className="home-main">
        <div className="home-buttons">
          <Link to="/login" className="home-button">Login</Link>
          <Link to="/signup" className="home-button">Signup</Link>
        </div>
      </main>
      <footer className="home-footer">
        <p>&copy; 2025 Job Application Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;