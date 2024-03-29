import { useState, useEffect, useCallback } from 'react';
import { Book } from './Book';

export interface UseBooksResult {
  books: Book[] | null;
  reload: () => Promise<void>;
}

export const useBooks = (): UseBooksResult => {
  const [books, setBooks] = useState<Book[] | null>(null);

  const reload = useCallback(async () => {
    setBooks(null);
    const response = await fetch('http://localhost:4730/books');
    if (response.status === 200) {
      const _books: Book[] = await response.json();
      setBooks(_books);
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  return {
    books,
    reload,
  };
};
