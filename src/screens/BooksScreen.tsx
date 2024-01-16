import { BookList } from '../components/BookList';
import { useBooks } from '../domain/books';
import { useTheme } from '../domain/theme/ThemeContext';

export const BooksScreen: React.FC = () => {
  const { books, reload } = useBooks();
  const theme = useTheme();

  return (
    <div className="books-screen">
      <h1>Books</h1>
      <div>
        <button style={{ color: theme.primaryColor }} onClick={reload}>
          Reload books
        </button>
        {books ? (
          <BookList books={books} onBookClicked={(book) => alert(book.price)} />
        ) : (
          <span>Loading books ... </span>
        )}
      </div>
    </div>
  );
};
