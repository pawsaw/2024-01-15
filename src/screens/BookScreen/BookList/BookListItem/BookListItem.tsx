import { useCallback, useState } from 'react';
import { Book } from '../../../../domain/books/Book';
import { Hideable } from '../../../../components/Hideable';
import { useTheme } from '../../../../domain/theme/ThemeContext';
import { Link } from 'react-router-dom';

export interface BookListItemProps {
  book: Book;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
  const [numLikes, setNumLikes] = useState(0);
  const incNumLikes = useCallback(() => {
    setNumLikes(numLikes + 1);
  }, [numLikes]);

  const theme = useTheme();

  return (
    <div>
      <span style={{ color: theme.primaryColor }}>{book.title}</span>
      <button onClick={incNumLikes}>
        <span>👏</span>
        <span>{numLikes}</span>
      </button>
      <Hideable>
        <p>{book.abstract}</p>
      </Hideable>
      <Link to={book.isbn}>Details</Link>
    </div>
  );
};
