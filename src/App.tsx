import { Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <a href="/books">Books</a>
      <a href="/about">About</a>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Bookmanager</h1>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
