import { useCallback, useState } from 'react';
import { Book } from '../../../../domain/books/Book';
import { Hideable } from '../../../../components/Hideable';
import { useTheme } from '../../../../domain/theme/ThemeContext';

export interface BookListItemProps {
  book: Book;
  onBookClicked?: (book: Book) => void;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookClicked }) => {
  const [numLikes, setNumLikes] = useState(0);
  const incNumLikes = useCallback(() => {
    setNumLikes(numLikes + 1);
  }, [numLikes]);

  const theme = useTheme();

  return (
    <div>
      <span style={{ color: theme.primaryColor }} onClick={() => onBookClicked?.(book)}>
        {book.title}
      </span>
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
