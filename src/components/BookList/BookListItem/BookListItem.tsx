import { useCallback, useState } from 'react';
import { Book } from '../../../domain/books/Book';
import { Hideable } from '../../Hideable';

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
      <Hideable
        containerStyle={{
          borderStyle: 'solid',
          border: 1,
          borderColor: 'red',
        }}
      >
        <p>{book.abstract}</p>
      </Hideable>
    </div>
  );
};
