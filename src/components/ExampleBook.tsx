type Book = unknown;

interface ExampleBookProps {
  book: Book;
}

export const ExampleBook: React.FC<ExampleBookProps> = (props) => {
  return <div></div>;
};
