import { BookList } from './BookList';
import { useBooks } from '../../domain/books';
import { useTheme } from '../../domain/theme/ThemeContext';

export const BooksScreen: React.FC = () => {
  const { books, reload } = useBooks();
  const theme = useTheme();

  return (
    <div className="books-screen">
      <h2>Books</h2>
      <div>
        <button style={{ color: theme.primaryColor }} onClick={reload}>
          Reload books
        </button>
        {books ? <BookList books={books} /> : <span>Loading books ... </span>}
      </div>
    </div>
  );
};
