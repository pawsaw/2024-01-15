import { useCallback, useState } from 'react';
import { Book } from '../../../domain/books/Book';

export interface BookListItemProps {
  book: Book;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
  const [numLikes, setNumLikes] = useState(0);
  const incNumLikes = useCallback(() => {
    setNumLikes(numLikes + 1);
  }, [numLikes]);

  return (
    <div>
      <span>{book.title}</span>
      <button onClick={incNumLikes}>
        <span>👏</span>
        <span>{numLikes}</span>
      </button>
    </div>
  );
};
