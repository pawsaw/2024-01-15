import { useParams } from 'react-router-dom';
import { Book, useBook } from '../../domain/books';
import { BookEditForm } from './BookEditForm';

export const BookEditScreen: React.FC = () => {
  const { isbn } = useParams<{ isbn: Book['isbn'] }>();
  const { book } = useBook(isbn!);

  return (
    <div className="book-edit">
      {book ? (
        <BookEditForm
          book={book}
          onSubmitTriggered={(input) => {
            console.log('bookEditInput', input);
          }}
        />
      ) : (
        <span>Loading book...</span>
      )}
    </div>
  );
};
