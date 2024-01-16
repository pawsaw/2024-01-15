import { CSSProperties } from 'react';
import { BookList } from './components/BookList';
import { useBooks } from './domain/books';

function App() {
  const { books, reload } = useBooks();

  return (
    <div>
      <button onClick={reload}>Reload books</button>
      <div className="App" style={styles.container}>
        {books ? <BookList books={books} /> : <span>Loading books ... </span>}
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    paddingTop: 30,
  },
};

export default App;
