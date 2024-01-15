import { Book } from '../../domain/books/Book';
import { BookListItem } from './BookListItem/BookListItem';

export interface BookListProps {
  books: Book[];
}

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <BookListItem key={book.id} book={book} />
      ))}
    </div>
  );
};
