import { CSSProperties } from 'react';
import { BookList } from './components/BookList';
import { exampleBooks } from './components/junk/exampleBooks';
import { Tab, Tabs } from './components/Tabs';

function App() {
  return (
    <div className="App" style={styles.container}>
      <BookList books={exampleBooks} />

      {/* <Tabs>
        <Tab label="Autos">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eligendi rem dolorem
          laborum unde numquam, incidunt praesentium error excepturi ut quae odit id minus sint esse
          asperiores quaerat ullam! Aliquid?
        </Tab>
        <Tab label="Schiffe">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates voluptas vero
          delectus distinctio explicabo tenetur quasi aspernatur minus quae? Necessitatibus harum
          est maxime nesciunt. Quia nisi quis nesciunt architecto nemo?
        </Tab>
      </Tabs> */}
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    paddingTop: 30,
  },
};

export default App;
