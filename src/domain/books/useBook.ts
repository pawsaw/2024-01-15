import { useState, useEffect, useCallback } from 'react';
import { Book } from './Book';

export interface UseBookResult {
  book: Book | null;
  reload: () => Promise<void>;
}

export const useBook = (isbn: Book['isbn']): UseBookResult => {
  const [book, setBook] = useState<Book | null>(null);

  const reload = useCallback(async () => {
    setBook(null);
    const response = await fetch(`http://localhost:4730/books/${isbn}`);
    if (response.status === 200) {
      const _book: Book = await response.json();
      setBook(_book);
    }
  }, [isbn]);

  useEffect(() => {
    reload();
  }, [reload]);

  return {
    book,
    reload,
  };
};
