import { CSSProperties } from 'react';
import { BookList } from './components/BookList';
import { useBooks } from './domain/books';
import { useTheme } from './domain/theme/ThemeContext';
import { useCounter } from './domain/counter/CounterContext';
import { Counter } from './components/Counter';

function App() {
  const { books, reload } = useBooks();

  const theme = useTheme();
  const { value: count } = useCounter();

  return (
    <div>
      <span>Counter: {count}</span>
      <Counter />
      <button style={{ color: theme.primaryColor }} onClick={reload}>
        Reload books
      </button>
      <div className="App" style={styles.container}>
        {books ? (
          <BookList books={books} onBookClicked={(book) => alert(book.price)} />
        ) : (
          <span>Loading books ... </span>
        )}
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
