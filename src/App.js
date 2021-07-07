import Container from '@material-ui/core/Container'
import Board from './connect-4/Board.js';

function App() {
  return (
    <div className="App">
      <Container
        className='container'
      >
        <Board />
      </Container>

    </div>
  );
}

export default App;
