import { useCallback, useEffect, useRef } from 'react';
import { Book } from '../../domain/books';

export interface BookEditInput {
  title: string;
}

export interface BookEditFormProps {
  book: Book;
  onSubmitTriggered: (input: BookEditInput) => void;
}

export const BookEditForm: React.FC<BookEditFormProps> = ({ book, onSubmitTriggered }) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    titleInputRef.current!.value = book.title;
  }, [book.title]);

  useEffect(() => {
    titleInputRef.current!.focus();
  }, []);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      const bookEditInput: BookEditInput = {
        title: titleInputRef.current!.value,
      };
      onSubmitTriggered(bookEditInput);
    },
    [onSubmitTriggered],
  );

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="bookTitle">Title:</label>
      <input
        ref={titleInputRef}
        id="bookTitle"
        type="text"
        placeholder="The book title goes here"
      />
      <button>Save</button>
    </form>
  );
};
