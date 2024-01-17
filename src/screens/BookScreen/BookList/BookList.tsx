import { Book } from '../../../domain/books/Book';
import { ThemeProvider } from '../../../domain/theme/ThemeContext';
import { BookListItem } from './BookListItem/BookListItem';

export interface BookListProps {
  books: Book[];
  onBookClicked: (book: Book) => void;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookClicked }) => {
  return (
    <ThemeProvider
      theme={{
        primaryColor: 'green',
        secondaryColor: 'red',
      }}
    >
      <div>
        {books.map((book) => (
          <BookListItem key={book.id} book={book} onBookClicked={onBookClicked} />
        ))}
      </div>
    </ThemeProvider>
  );
};
