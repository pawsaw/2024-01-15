import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import { ErrorScreen } from './screens/ErrorScreen';
import { BooksScreen } from './screens/BookScreen';
import { AboutScreen } from './screens/AboutScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: 'books',
        element: <BooksScreen />,
      },
      {
        path: 'about',
        element: <AboutScreen />,
      },
      {
        path: '',
        loader: () => redirect('books'),
      },
    ],
  },
]);
