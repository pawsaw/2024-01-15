import { CSSProperties } from 'react';
import { BookList } from './components/BookList';
import { exampleBooks } from './components/junk/exampleBooks';

function App() {
  return (
    <div className="App" style={styles.container}>
      <BookList books={exampleBooks} />
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    paddingTop: 30,
  },
};

export default App;
