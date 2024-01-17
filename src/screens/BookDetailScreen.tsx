import { Link, useParams } from 'react-router-dom';
import { Book, useBook } from '../domain/books';

export const BookDetailScreen: React.FC = () => {
  const { isbn } = useParams<{ isbn: Book['isbn'] }>();
  const { book } = useBook(isbn!);

  return (
    <div className="book-detail">
      {book ? (
        <span>
          <h2>{book.title}</h2>
          <Link to="edit">
            <button>edit</button>
          </Link>
        </span>
      ) : (
        <span>Loading book...</span>
      )}
    </div>
  );
};
