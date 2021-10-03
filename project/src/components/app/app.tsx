import Main from '../main/main';

type Props = {
  readonly name: string;
  readonly genre: string,
  readonly released: number,
}

function App({ name, genre, released }: Props): JSX.Element {
  return (
    <Main
      name={name}
      genre={genre}
      released={released}
    />
  );
}

export default App;
