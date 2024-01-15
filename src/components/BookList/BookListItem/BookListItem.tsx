import { Book } from '../../../domain/books/Book';

export interface BookListItemProps {
  book: Book;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
  return (
    <div>
      <span>{book.title}</span>
    </div>
  );
};
